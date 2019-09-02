package com.s2u2m.prod.showme.controller.resource;

import com.s2u2m.prod.showme.category.repo.LabelStatistic;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import org.springframework.hateoas.ResourceSupport;

/**
 * LabelResource Create on 8/12/19
 *
 * @author Yangyang.xia
 */
@Getter
@AllArgsConstructor
@Builder
public class LabelResource extends ResourceSupport {
    private String name;
    private Long articleAmount;

    public LabelResource(LabelStatistic statistic) {
        this.name = statistic.getLabel();
        this.articleAmount = statistic.getArticleAmount();
    }
}
