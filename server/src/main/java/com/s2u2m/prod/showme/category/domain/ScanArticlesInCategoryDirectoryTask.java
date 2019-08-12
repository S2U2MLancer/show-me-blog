package com.s2u2m.prod.showme.category.domain;

import java.io.File;
import java.text.MessageFormat;
import java.util.Arrays;
import java.util.concurrent.RecursiveAction;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import com.s2u2m.prod.showme.article.domain.Article;
import com.s2u2m.prod.showme.article.repo.ArticleRepo;
import lombok.extern.slf4j.Slf4j;

/**
 * GetArticlesFromCategoryDirectoryTask Create on 8/15/19
 *
 * @author Yangyang.xia
 */
@Slf4j
public class ScanArticlesInCategoryDirectoryTask extends RecursiveAction {
    private final ArticleRepo articleRepo;
    private final CategoryInfo categoryInfo;
    private final File directory;

    public ScanArticlesInCategoryDirectoryTask(ArticleRepo articleRepo, CategoryInfo info, File directory) {
        this.articleRepo = articleRepo;
        this.categoryInfo = info;
        this.directory = directory;
    }

    @Override
    protected void compute() {
        if (!directory.exists() || !directory.isDirectory()) {
            log.error(MessageFormat.format(
                "File[{0}] not existed or not a directory", directory));
            return;
        }

        Arrays.stream(directory.listFiles())
            .forEach(file -> {
                if (file.isDirectory()) {
                    scanArticles(file);
                    return;
                }

                if (file.isFile()) {
                    scanArticleFromFile(file);
                    return;
                }
                return;
            });
    }

    private void scanArticles(File dir) {
        new ScanArticlesInCategoryDirectoryTask(articleRepo, categoryInfo, dir).fork().join();
    }

    private void scanArticleFromFile(File file) {
        log.debug(file.toString());
        Article article = articleRepo.getArticleFromFile(categoryInfo, file);
        articleRepo.save(article);
    }
}
