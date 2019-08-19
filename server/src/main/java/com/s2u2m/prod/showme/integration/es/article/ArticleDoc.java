package com.s2u2m.prod.showme.integration.es.article;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import java.util.Collection;

@Getter
@Setter
public class ArticleDoc {
    @JsonIgnore
    private String id;
    private String category;
    private String title;

    private Long createTime;
    private Long updateTime;
    private Collection<String> labels;
    private String filePath;
}
