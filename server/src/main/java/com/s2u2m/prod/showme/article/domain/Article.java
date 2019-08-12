package com.s2u2m.prod.showme.article.domain;

import java.time.Instant;
import java.util.Collection;

import lombok.Builder;
import lombok.Getter;

/**
 * Article Create on 8/6/19
 *
 * @author Yangyang.xia
 */
@Getter
@Builder
public class Article {
    private String id;
    private String title;
//    private String author;
//    private String summary;
    private Instant createTime;
    private Instant updateTime;
    private Collection<String> labels;
    private String filePath;
}
