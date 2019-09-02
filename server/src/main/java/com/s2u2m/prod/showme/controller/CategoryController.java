package com.s2u2m.prod.showme.controller;

import com.s2u2m.prod.showme.article.domain.Article;
import com.s2u2m.prod.showme.article.repo.ArticleRepo;
import com.s2u2m.prod.showme.category.constant.CategoriesConfig;
import com.s2u2m.prod.showme.category.repo.CategoryRepo;
import com.s2u2m.prod.showme.category.repo.LabelStatistic;
import com.s2u2m.prod.showme.category.service.CategoryService;
import com.s2u2m.prod.showme.BaseShowMeBean;
import com.s2u2m.prod.showme.util.Paging;
import com.s2u2m.prod.showme.controller.resource.ArticleResource;
import com.s2u2m.prod.showme.controller.resource.CategoryResource;
import com.s2u2m.prod.showme.controller.resource.LabelResource;
import com.s2u2m.prod.showme.util.PagingUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Profile;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.web.bind.annotation.*;

import javax.validation.constraints.NotBlank;
import java.util.Arrays;
import java.util.Collection;
import java.util.stream.Collectors;

import static org.springframework.hateoas.mvc.ControllerLinkBuilder.linkTo;

/**
 * MenuController Create on 7/30/19
 *
 * @author Yangyang.xia
 */
@RestController
@RequestMapping(value = "/categories")
public class CategoryController extends BaseShowMeBean {

    @Autowired
    private CategoriesConfig categoriesConfig;

    @Autowired
    private CategoryService categoryService;

    @GetMapping("/")
    public Collection<CategoryResource> getCategories() {
        return categoriesConfig.getCategories().stream()
            .map(CategoryResource::new)
            .collect(Collectors.toList());
    }

    @GetMapping("/{category}/labels")
    public Paging<LabelResource> getLabels(
        @NotBlank @PathVariable String category,
        @RequestParam(value = "index", defaultValue = "1") int pageIndex,
        @RequestParam(value = "size", defaultValue = "10") int pageSize) {
        var categoryRepo = getBean(CategoryRepo.class);
        var labels = categoryRepo.getLabels(category).toArray(new LabelStatistic[0]);
        var pagingItems = PagingUtils.paging(labels, pageIndex, pageSize);
        return pagingItems.convert(LabelResource::new);
    }

    @GetMapping("/{category}/labels/{label}")
    public Paging<ArticleResource> getLabelArticles(
            @PathVariable("category") String category, @PathVariable("label") String label,
            @RequestParam(value = "index", defaultValue = "1") int pageIndex,
            @RequestParam(value = "size", defaultValue = "10") int pageSize) {
        var categoryInfo = categoriesConfig.getCategory(category);
        var articleRepo = getBean(ArticleRepo.class);
        Collection<Article> articles = articleRepo.getArticles(categoryInfo, label);
        var pagingItems = PagingUtils.paging(articles.toArray(new Article[0]), pageIndex, pageSize);
        return pagingItems.convert(ArticleResource::new);
    }

    @Scheduled(fixedRate = 60 * 60 * 1000 )
    public void scan() {
        categoriesConfig.getCategories()
            .forEach(categoryInfo -> categoryService.scanCategory(categoryInfo));
    }

    @Profile(value = "dev")
    @PutMapping("/scan")
    public void triggerScan() {
        this.scan();
    }
}
