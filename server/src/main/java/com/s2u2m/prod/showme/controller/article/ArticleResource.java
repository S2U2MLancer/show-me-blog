package com.s2u2m.prod.showme.controller.article;

import java.time.Instant;

import org.springframework.hateoas.ResourceSupport;

import lombok.Builder;
import lombok.Getter;

/**
 * ArticleResource Create on 8/8/19
 *
 * @author Yangyang.xia
 */
@Getter
@Builder
public class ArticleResource extends ResourceSupport {
    private String id;
    private String category;
    private String title;
    private String author;
    private Instant createTime;
    private Instant updateTime;
    private String summary;
}
