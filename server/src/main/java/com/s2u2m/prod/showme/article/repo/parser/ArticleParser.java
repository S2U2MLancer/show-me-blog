package com.s2u2m.prod.showme.article.repo.parser;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.attribute.BasicFileAttributes;
import java.text.MessageFormat;
import java.util.*;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import com.s2u2m.prod.showme.article.domain.Article;
import com.s2u2m.prod.showme.category.domain.CategoryInfo;
import org.springframework.util.ObjectUtils;
import org.springframework.util.StringUtils;

/**
 * ArticleParser Create on 8/15/19
 *
 * @author Yangyang.xia
 */
public class ArticleParser {
    private final CategoryInfo categoryInfo;
    private final File articleFile;
    private final Pattern titleReg = Pattern.compile("^#\\s+(?<title>.+)");

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

        try(FileReader file = new FileReader(articleFile);
            BufferedReader buf = new BufferedReader(file)) {
            String title = buf.lines()
                    .map(titleReg::matcher)
                    .filter(Matcher::matches)
                    .findFirst()
                    .map(matcher -> matcher.group("title"))
                    .orElse(articleFile.getName());
            builder.title(title);
        }
        return builder.build();
    }

    private void initArticle(Article.ArticleBuilder builder, File articleFile) throws IOException {
        BasicFileAttributes attributes = Files.readAttributes(articleFile.toPath(), BasicFileAttributes.class);
        String fileKey = Optional.ofNullable(attributes.fileKey())
                .map(Object::toString)
                .orElse(UUID.randomUUID().toString());
        builder.id(fileKey)
                .createTime(attributes.creationTime().toInstant())
                .updateTime(attributes.lastModifiedTime().toInstant());

        int index = this.categoryInfo.getDataPath().length();
        var articleRelPath = articleFile.toString().substring(index);
        builder.filePath(articleRelPath);

        Path articleDirRelPath = Paths.get(articleRelPath).getParent();
        String[] labels = StringUtils.split(articleDirRelPath.toString(), File.separator);
        if (ObjectUtils.isEmpty(labels)) {
            return;
        }

        Collection<String> validLabels = Stream.of(labels)
                .filter(label -> !StringUtils.isEmpty(label))
                .collect(Collectors.toList());
        builder.labels(validLabels);
    }
}
