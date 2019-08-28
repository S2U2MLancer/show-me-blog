package com.s2u2m.prod.showme.integration.es.article;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.s2u2m.prod.showme.integration.es.EsConfig;
import org.elasticsearch.action.index.IndexRequest;
import org.elasticsearch.action.index.IndexResponse;
import org.elasticsearch.action.search.SearchRequest;
import org.elasticsearch.client.RequestOptions;
import org.elasticsearch.common.xcontent.XContentType;
import org.elasticsearch.script.ScriptType;
import org.elasticsearch.script.mustache.SearchTemplateRequest;
import org.elasticsearch.script.mustache.SearchTemplateResponse;
import org.elasticsearch.search.SearchHit;
import org.elasticsearch.search.aggregations.bucket.terms.Terms;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.io.IOException;
import java.util.*;
import java.util.stream.Collectors;

@Repository
public class ArticleEsRepoImpl implements ArticleEsRepo {
    private static final String ARTICLE_INDEX_NAME = "article";

    @Autowired
    private EsConfig esConfig;

    @Override
    public String insert(ArticleDoc doc) throws IOException {
        ObjectMapper mapper = new ObjectMapper();
        IndexRequest request = new IndexRequest(ARTICLE_INDEX_NAME)
                .id(doc.getId())
                .source(mapper.writeValueAsString(doc), XContentType.JSON);
        try(var client = esConfig.getEsClient()) {
            IndexResponse response = client.index(request, RequestOptions.DEFAULT);
            return response.getId();
        }
    }

    @Override
    public Map<String, Long> getLabelStatistic(String category) throws IOException {
        SearchTemplateRequest request = new SearchTemplateRequest();
        request.setRequest(new SearchRequest(ARTICLE_INDEX_NAME));
        request.setScriptType(ScriptType.STORED);
        request.setScript("article_label_statistic");

        var params = new LinkedHashMap<String, Object>();
        params.put("category", category);
        request.setScriptParams(params);

        SearchTemplateResponse response;
        try(var client = esConfig.getEsClient()) {
            response = client.searchTemplate(request, RequestOptions.DEFAULT);
        }
        Terms label_statistic = response.getResponse().getAggregations().get("label_statistic");
        return label_statistic.getBuckets().stream()
                .collect(Collectors.toMap(
                        Terms.Bucket::getKeyAsString,
                        Terms.Bucket::getDocCount
                ));
    }

    @Override
    public Collection<ArticleDoc> getArticles(String category, String label) throws IOException {
        SearchTemplateRequest request = new SearchTemplateRequest();
        request.setRequest(new SearchRequest(ARTICLE_INDEX_NAME));
        request.setScriptType(ScriptType.STORED);
        request.setScript("label_articles");

        var params = new LinkedHashMap<String, Object>();
        params.put("category", category);
        params.put("label", label);
        request.setScriptParams(params);

        SearchTemplateResponse response;
        try(var client = esConfig.getEsClient()) {
            response = client.searchTemplate(request, RequestOptions.DEFAULT);
        }

        if (response.getResponse().getHits().getTotalHits().value == 0) {
            return Collections.emptyList();
        }

        var docs = new LinkedList<ArticleDoc>();
        for (SearchHit hit: response.getResponse().getHits().getHits()) {
            ObjectMapper mapper = new ObjectMapper();
            ArticleDoc doc = mapper.readValue(hit.getSourceAsString(), ArticleDoc.class);
            doc.setId(hit.getId());
            docs.add(doc);
        }
        return docs;
    }
}
