package com.s2u2m.prod.showme.controller.resource;

import com.s2u2m.prod.showme.article.domain.Article;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import org.springframework.hateoas.ResourceSupport;

import java.time.Instant;

import static org.springframework.hateoas.mvc.ControllerLinkBuilder.linkTo;

/**
 * ArticleResource Create on 8/8/19
 *
 * @author Yangyang.xia
 */
@Getter
@AllArgsConstructor
@Builder
public class ArticleResource extends ResourceSupport {
    private String articleId;
    private String category;
    private String title;
//    private String author;
//    private String summary;
    private Instant createTime;
    private Instant updateTime;

    public ArticleResource(Article article) {
        this.articleId = article.getId();
        this.category = article.getCategory();
        this.title = article.getTitle();
        this.createTime = article.getCreateTime();
        this.updateTime = article.getUpdateTime();

//        var self = linkTo("static").slash(article.getFilePath()).withSelfRel();
//        add(self);
    }
}
