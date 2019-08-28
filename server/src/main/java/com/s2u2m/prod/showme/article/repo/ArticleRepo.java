package com.s2u2m.prod.showme.article.repo;

import com.s2u2m.prod.showme.article.domain.Article;
import com.s2u2m.prod.showme.category.domain.CategoryInfo;

import java.io.File;
import java.util.Collection;

/**
 * ArticleRepo Create on 8/12/19
 *
 * @author Yangyang.xia
 */
public interface ArticleRepo {
    Collection<Article> getArticles(CategoryInfo category, String label);

    Article getArticleFromFile(CategoryInfo categoryInfo, File file);

    void save(Article article);
}
