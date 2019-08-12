package com.s2u2m.prod.showme.controller.category;

import org.springframework.hateoas.ResourceSupport;

import lombok.Builder;
import lombok.Getter;

/**
 * MenuInfoResponse Create on 7/30/19
 *
 * @author Yangyang.xia
 */
@Getter
@Builder
public class CategoryResource extends ResourceSupport {
    private String name;
}
