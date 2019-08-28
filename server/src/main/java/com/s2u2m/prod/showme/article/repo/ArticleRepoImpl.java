package com.s2u2m.prod.showme.article.repo;

import com.s2u2m.prod.showme.article.domain.Article;
import com.s2u2m.prod.showme.article.repo.parser.ArticleParser;
import com.s2u2m.prod.showme.category.domain.CategoryInfo;
import com.s2u2m.prod.showme.error.ShowMeErrorCode;
import com.s2u2m.prod.showme.error.ShowMeRuntimeException;
import com.s2u2m.prod.showme.integration.es.article.ArticleDoc;
import com.s2u2m.prod.showme.integration.es.article.ArticleEsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.io.File;
import java.io.IOException;
import java.time.Instant;
import java.util.Collection;
import java.util.stream.Collectors;

/**
 * ArticleRepoImpl Create on 8/12/19
 *
 * @author Yangyang.xia
 */
@Repository
class ArticleRepoImpl implements ArticleRepo {

    @Autowired
    private ArticleEsRepo articleEsRepo;

    @Override
    public Collection<Article> getArticles(CategoryInfo category, String label) {
        try {
            Collection<ArticleDoc> docs = articleEsRepo.getArticles(category.getName(), label);
            return docs.stream()
                    .map(ArticleConverter::toArticle)
                    .collect(Collectors.toList());
        } catch (IOException e) {
            throw new ShowMeRuntimeException(ShowMeErrorCode.EXTERNAL_SERVICE_ERROR, e);
        }
    }

    @Override
    public Article getArticleFromFile(CategoryInfo categoryInfo, File file) {
        try {
            return new ArticleParser(categoryInfo, file).parse();
        } catch (IOException e) {
            throw new ShowMeRuntimeException(ShowMeErrorCode.EXTERNAL_SERVICE_ERROR, e);
        }
    }

    @Override
    public void save(Article article) {
        ArticleDoc doc = ArticleConverter.toEsDoc(article);
        try {
            String id = articleEsRepo.insert(doc);
        } catch (IOException e) {
            throw new ShowMeRuntimeException(ShowMeErrorCode.EXTERNAL_SERVICE_ERROR, e);
        }

    }

    private static class ArticleConverter {
        static ArticleDoc toEsDoc(Article article) {
            ArticleDoc doc = new ArticleDoc();
            doc.setId(article.getId());
            doc.setTitle(article.getTitle());
            doc.setCategory(article.getCategory());
            doc.setCreateTime(article.getCreateTime().toEpochMilli());
            doc.setUpdateTime(article.getUpdateTime().toEpochMilli());
            doc.setLabels(article.getLabels());
            doc.setFilePath(article.getFilePath());
            return doc;
        }

        static Article toArticle(ArticleDoc doc) {
            return Article.builder()
                    .id(doc.getId())
                    .category(doc.getCategory())
                    .title(doc.getTitle())
                    .createTime(Instant.ofEpochMilli(doc.getCreateTime()))
                    .updateTime(Instant.ofEpochMilli(doc.getUpdateTime()))
                    .labels(doc.getLabels())
                    .filePath(doc.getFilePath())
                    .build();

        }
    }
}
