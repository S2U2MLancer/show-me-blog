package com.s2u2m.prod.showme.integration.es.article;

import java.io.IOException;
import java.util.Collection;
import java.util.Map;

public interface ArticleEsRepo {
    String insert(ArticleDoc doc) throws IOException;

    Map<String, Long> getLabelStatistic(String category) throws IOException;

    Collection<ArticleDoc> getArticles(String category, String label) throws IOException;
}
