package com.s2u2m.prod.showme.article.repo;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.Collection;

import org.springframework.stereotype.Repository;

import com.s2u2m.prod.showme.article.domain.Article;
import com.s2u2m.prod.showme.article.repo.parser.ArticleParser;
import com.s2u2m.prod.showme.category.domain.CategoryInfo;
import com.s2u2m.prod.showme.error.ShowMeErrorCode;
import com.s2u2m.prod.showme.error.ShowMeRuntimeException;

/**
 * ArticleRepoImpl Create on 8/12/19
 *
 * @author Yangyang.xia
 */
@Repository
class ArticleRepoImpl implements ArticleRepo {
    @Override
    public Collection<Article> getArticles(CategoryInfo category) {

        return null;
    }

    @Override
    public Article getArticleFromFile(CategoryInfo categoryInfo, File file) {
        try {
            return new ArticleParser(file).parse();
        } catch (IOException e) {
            throw new ShowMeRuntimeException(ShowMeErrorCode.EXTERNAL_SERVICE_ERROR, e);
        }
    }

    @Override
    public void save(Article article) {

    }
}
