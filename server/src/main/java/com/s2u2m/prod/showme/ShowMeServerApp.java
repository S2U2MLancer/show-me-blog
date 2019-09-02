package com.s2u2m.prod.showme;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.hateoas.config.EnableHypermediaSupport;
import org.springframework.scheduling.annotation.EnableScheduling;

@EnableHypermediaSupport(type= {EnableHypermediaSupport.HypermediaType.HAL})
@EnableScheduling
@SpringBootApplication
public class ShowMeServerApp extends SpringBootServletInitializer {

    public static void main(String[] args) {
        SpringApplication.run(ShowMeServerApp.class, args);
    }
}
