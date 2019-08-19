package com.s2u2m.prod.showme.controller.category;

import com.s2u2m.prod.showme.category.constant.CategoriesConfig;
import com.s2u2m.prod.showme.category.service.CategoryService;
import com.s2u2m.prod.showme.controller.Paging;
import com.s2u2m.prod.showme.controller.article.ArticleResource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.web.bind.annotation.*;

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
public class CategoryController {

    @Autowired
    private CategoriesConfig categoriesConfig;

    @Autowired
    private CategoryService categoryService;

    @GetMapping("/")
    public Collection<CategoryResource> getCategories() {
        return categoriesConfig.getCategories().stream()
            .map(categoryInfo -> {
                CategoryResource categoryResource = CategoryResource.builder()
                    .name(categoryInfo.getName())
                    .build();
                categoryResource.add(linkTo(CategoryController.class).slash(categoryResource.getName()).withSelfRel());
                return categoryResource;
            })
            .collect(Collectors.toList());
    }

    @GetMapping("/{category}/labels")
    public Paging<ArticleResource> getArticles(
        @PathVariable String category,
        @RequestParam(value = "index", defaultValue = "1") int pageIndex,
        @RequestParam(value = "size", defaultValue = "10") int pageSize) {
        return Paging.<ArticleResource>builder()
            .build();
    }

    @Scheduled(fixedRate = 60 * 60 * 1000 )
    public void scan() {
        categoriesConfig.getCategories()
            .forEach(categoryInfo -> categoryService.scanCategory(categoryInfo));
    }

    @PutMapping("/scan")
    public void triggerScan() {
        this.scan();
    }
}
