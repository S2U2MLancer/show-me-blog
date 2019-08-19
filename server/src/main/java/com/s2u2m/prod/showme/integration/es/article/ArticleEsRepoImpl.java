package com.s2u2m.prod.showme.integration.es.article;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.s2u2m.prod.showme.integration.es.EsConfig;
import org.elasticsearch.action.index.IndexRequest;
import org.elasticsearch.action.index.IndexResponse;
import org.elasticsearch.client.RequestOptions;
import org.elasticsearch.common.xcontent.XContentType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.io.IOException;
import java.util.Map;

@Repository
public class ArticleEsRepoImpl implements ArticleEsRepo {

    @Autowired
    private EsConfig esConfig;

    @Override
    public String insert(ArticleDoc doc) throws IOException {
        ObjectMapper mapper = new ObjectMapper();
        IndexRequest request = new IndexRequest("article")
                .id(doc.getId())
                .source(mapper.writeValueAsString(doc), XContentType.JSON);
        try(var client = esConfig.getEsClient()) {
            IndexResponse response = client.index(request, RequestOptions.DEFAULT);
            return response.getId();
        }
    }

    @Override
    public Map<String, Long> getLabelStatistic() {

        return null;
    }
}
