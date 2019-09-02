package com.s2u2m.prod.showme.category.repo;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class LabelStatistic {
    private String category;
    private String label;
    private Long articleAmount;
}
