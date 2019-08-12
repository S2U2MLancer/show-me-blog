package com.s2u2m.prod.showme.category.constant;

import java.util.Collection;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

import com.s2u2m.prod.showme.category.domain.CategoryInfo;
import lombok.Getter;
import lombok.Setter;

/**
 * MenuConfig Create on 8/5/19
 *
 * @author Yangyang.xia
 */
@Getter
@Setter
@Configuration
@ConfigurationProperties(prefix = "s2u2m")
public class CategoriesConfig {
    private Collection<CategoryInfo> categories;
}
