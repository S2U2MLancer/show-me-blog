#!/usr/bin/env bash

curl -XPUT "http://es:9200/article" -H 'Content-Type: application/json' \
-d'{"mappings":{"properties":{"category":{"type":"keyword"},"title":{"type":"text","fields":{"raw":{"type":"keyword"}}},"createTime":{"type":"date"},"updateTime":{"type":"date"},"labels":{"type":"keyword"},"filePath":{"type":"text"}}}}'

curl -XPOST "http://es:9200/_scripts/article_label_statistic" -H 'Content-Type: application/json' \
-d'{"script":{"lang":"mustache","source":{"size":0,"query":{"term":{"category":{"value":"{{category}}"}}},"aggs":{"label_statistic":{"terms":{"field":"labels","order":{"_count":"desc"}}}}}}}'

curl -XPOST "http://es:9200/_scripts/label_articles" -H 'Content-Type: application/json' \
-d'{"script":{"lang":"mustache","source":{"query":{"bool":{"must":[{"term":{"category":{"value":"{{category}}"}}},{"term":{"labels":{"value":"{{label}}"}}}]}},"sort":[{"updateTime":{"order":"desc"}}]}}}'
