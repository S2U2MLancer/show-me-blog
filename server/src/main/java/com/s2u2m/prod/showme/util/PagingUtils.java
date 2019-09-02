package com.s2u2m.prod.showme.util;

import java.util.Arrays;

public class PagingUtils {

    public static <T> Paging<T> paging(T[] arrays, int pageIndex, int pageSize) {
        if (pageIndex == 0  || pageSize == 0) {
            return Paging.<T>builder()
                    .currentIndex(1)
                    .pageAmount(1)
                    .items(Arrays.asList(arrays))
                    .total(arrays.length)
                    .build();
        }

        int pageAmount = Math.round(arrays.length / pageSize);
        int start = (pageIndex - 1) * pageSize;
        int end = start + pageSize;
        T[] pagingItems = Arrays.copyOfRange(arrays, start, end);
        return Paging.<T>builder()
                .currentIndex(pageIndex)
                .pageAmount(pageAmount)
                .items(Arrays.asList(pagingItems))
                .total(arrays.length)
                .build();
    }
}
