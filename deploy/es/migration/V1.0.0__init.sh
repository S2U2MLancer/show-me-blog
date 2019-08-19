#!/usr/bin/env bash

curl -XPUT "http://es:9200/article" -H 'Content-Type: application/json' \
-d'{"mappings":{"properties":{"category":{"type":"keyword"},"title":{"type":"text","fields":{"raw":{"type":"keyword"}}},"createTime":{"type":"date"},"updateTime":{"type":"date"},"labels":{"type":"keyword"},"filePath":{"type":"text"}}}}'