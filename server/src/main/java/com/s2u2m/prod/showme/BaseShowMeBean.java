package com.s2u2m.prod.showme;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;

public abstract class BaseShowMeBean {

    @Autowired
    private ApplicationContext applicationContext;

    protected <T> T getBean(Class<T> tc) {
        return this.applicationContext.getBean(tc);
    }
}
