package com.s2u2m.prod.showme.category.service;

import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.concurrent.ForkJoinPool;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.s2u2m.prod.showme.article.repo.ArticleRepo;
import com.s2u2m.prod.showme.category.domain.CategoryInfo;
import com.s2u2m.prod.showme.category.domain.ScanArticlesInCategoryDirectoryTask;

/**
 * CategoryServiceImpl Create on 8/12/19
 *
 * @author Yangyang.xia
 */
@Service
public class CategoryServiceImpl implements CategoryService {
    private final ForkJoinPool commonPool = ForkJoinPool.commonPool();

    @Autowired
    private ArticleRepo articleRepo;

    @Override
    public void scanCategory(CategoryInfo category) {
        Path categoryPath = Paths.get(category.getDataPath());
        ScanArticlesInCategoryDirectoryTask task = new ScanArticlesInCategoryDirectoryTask(
            articleRepo, category, categoryPath.toFile());
        commonPool.execute(task);
        task.join();
    }
}
