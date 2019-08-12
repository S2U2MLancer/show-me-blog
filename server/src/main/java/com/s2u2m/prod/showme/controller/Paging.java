package com.s2u2m.prod.showme.controller;

import java.util.Collection;

import org.springframework.hateoas.ResourceSupport;

import lombok.Builder;
import lombok.Getter;

/**
 * Paging Create on 8/8/19
 *
 * @author Yangyang.xia
 */
@Getter
@Builder
public class Paging<T>  extends ResourceSupport {
    private int currentIndex;
    private int pageAmount;
    private int total;
    private Collection<T> items;
}
