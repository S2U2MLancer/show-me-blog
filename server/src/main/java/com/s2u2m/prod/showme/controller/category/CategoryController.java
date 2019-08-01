package com.s2u2m.prod.showme.controller.category;

import java.util.Collection;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.s2u2m.prod.showme.category.CategoriesConfig;
import com.s2u2m.prod.showme.category.Paging;
import com.s2u2m.prod.showme.controller.article.ArticleResource;
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

    @GetMapping("/{category}/articles")
    public Paging<ArticleResource> getArticles(@PathVariable String category) {
        return Paging.<ArticleResource>builder()
            .build();
    }

}
