package com.s2u2m.prod.showme.controller.resource;

import com.s2u2m.prod.showme.category.domain.CategoryInfo;
import com.s2u2m.prod.showme.controller.CategoryController;
import lombok.Setter;
import org.springframework.hateoas.ResourceSupport;

import lombok.Getter;

import static org.springframework.hateoas.mvc.ControllerLinkBuilder.linkTo;

/**
 * MenuInfoResponse Create on 7/30/19
 *
 * @author Yangyang.xia
 */
@Getter
@Setter
public class CategoryResource extends ResourceSupport {
    private String name;

    public CategoryResource(CategoryInfo info) {
        this.name = info.getName();
        var self = linkTo(CategoryController.class).slash(info.getName()).withSelfRel();
        add(self);
    }
}
