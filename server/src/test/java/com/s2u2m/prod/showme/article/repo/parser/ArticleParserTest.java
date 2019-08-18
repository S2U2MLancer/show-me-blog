package com.s2u2m.prod.showme.article.repo.parser;

import com.s2u2m.prod.showme.BaseTestCase;
import com.s2u2m.prod.showme.article.domain.Article;
import com.s2u2m.prod.showme.category.domain.CategoryInfo;
import org.junit.Test;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.nio.file.Paths;

import static org.junit.Assert.*;

public class ArticleParserTest extends BaseTestCase {

    @Test
    public void parse() throws IOException {
        File categoryDir = getDataInResources("fixtures/category");
        CategoryInfo categoryInfo = new CategoryInfo();
        categoryInfo.setName("category");
        categoryInfo.setDataPath(categoryDir.getAbsolutePath());

        File articleFile = Paths.get(categoryDir.getAbsolutePath(), "label_1/file_2.md").toFile();
        Article article = new ArticleParser(categoryInfo, articleFile).parse();
        assertEquals("Title", article.getTitle());
        assertTrue(article.getLabels().contains("label_1"));
    }
}