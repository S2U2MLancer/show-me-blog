package com.s2u2m.prod.showme.article.repo;

import java.io.File;
import java.io.IOException;
import java.util.Collection;

import com.s2u2m.prod.showme.article.domain.Article;
import com.s2u2m.prod.showme.category.domain.CategoryInfo;

/**
 * ArticleRepo Create on 8/12/19
 *
 * @author Yangyang.xia
 */
public interface ArticleRepo {
    Collection<Article> getArticles(CategoryInfo category);

    Article getArticleFromFile(CategoryInfo categoryInfo, File file) throws IOException;

    void save(Article article);
}
