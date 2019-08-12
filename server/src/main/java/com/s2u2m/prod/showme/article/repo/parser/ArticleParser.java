package com.s2u2m.prod.showme.article.repo.parser;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.text.MessageFormat;
import java.util.LinkedList;
import java.util.List;

import com.s2u2m.prod.showme.article.domain.Article;
import com.s2u2m.prod.showme.category.domain.CategoryInfo;

/**
 * ArticleParser Create on 8/15/19
 *
 * @author Yangyang.xia
 */
public class ArticleParser {
    private final CategoryInfo categoryInfo;
    private final File articleFile;

    public ArticleParser(CategoryInfo categoryInfo, File articleFile) {
        this.categoryInfo = categoryInfo;
        this.articleFile = articleFile;
    }

    public Article parse() throws IOException  {
        if (!articleFile.exists() || !articleFile.isFile()) {
            throw new IOException(MessageFormat.format(
                "{0} is not existed or not a directory", articleFile.getAbsolutePath()));
        }

        Article.ArticleBuilder builder = Article.builder();
        this.initArticle(builder, this.articleFile);

        List<String> sectionContent = new LinkedList<>();
        try(FileReader file = new FileReader(articleFile);
            BufferedReader buf = new BufferedReader(file)) {

        }
        return builder.build();
    }

    private void initArticle(Article.ArticleBuilder builder, File articleFile) {

    }
}
