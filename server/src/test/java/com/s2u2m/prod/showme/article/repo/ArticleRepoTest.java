package com.s2u2m.prod.showme.article.repo;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.nio.file.Paths;

import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

import com.s2u2m.prod.showme.BaseTestCase;
import com.s2u2m.prod.showme.article.domain.Article;
import com.s2u2m.prod.showme.category.domain.CategoryInfo;
import static org.junit.Assert.*;

/**
 * ArticleRepoImplTest Create on 8/15/19
 *
 * @author Yangyang.xia
 */
public class ArticleRepoTest extends BaseTestCase {

    @Autowired
    private ArticleRepo articleRepo;

    @Test
    public void getArticleFromFile() throws IOException {
        File categoryDir = getDataInResources("fixtures/category");
        CategoryInfo categoryInfo = new CategoryInfo();
        categoryInfo.setName("category");
        categoryInfo.setDataPath(categoryDir.getAbsolutePath());

        File articleFile = Paths.get(categoryDir.getAbsolutePath(), "label_1/file_2.md").toFile();
        Article article = articleRepo.getArticleFromFile(categoryInfo, articleFile);
        assertEquals("Title", article.getTitle());
        assertTrue(article.getLabels().contains("label_1"));
    }
}