package com.s2u2m.prod.showme.util;

import lombok.Builder;
import lombok.Getter;

import java.util.Collection;
import java.util.function.Function;
import java.util.stream.Collectors;

/**
 * Paging Create on 8/8/19
 *
 * @author Yangyang.xia
 */
@Getter
@Builder
public class Paging<T>  {
    private int currentIndex;
    private int pageAmount;
    private int total;
    private Collection<T> items;

    public <R> Paging<R> convert(Function<T, R> converter) {
        var targets = this.items.stream().map(converter).collect(Collectors.toList());
        return Paging.<R>builder()
                .currentIndex(this.currentIndex)
                .pageAmount(this.pageAmount)
                .items(targets)
                .total(this.total)
                .build();
    }
}
