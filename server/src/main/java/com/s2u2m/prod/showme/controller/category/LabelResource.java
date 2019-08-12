package com.s2u2m.prod.showme.controller.category;

import org.springframework.hateoas.ResourceSupport;

import lombok.Builder;
import lombok.Getter;

/**
 * LabelResource Create on 8/12/19
 *
 * @author Yangyang.xia
 */
@Getter
@Builder
public class LabelResource extends ResourceSupport {
    private String name;
}
