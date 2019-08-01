package com.s2u2m.prod.showme.category;

import java.util.Collection;

import lombok.Builder;
import lombok.Getter;

/**
 * Paging Create on 8/8/19
 *
 * @author Yangyang.xia
 */
@Getter
@Builder
public class Paging<T> {
    private int currentIndex;
    private int pageAmount;
    private int total;
    private Collection<T> items;
}
