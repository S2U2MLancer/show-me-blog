package com.s2u2m.prod.showme;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

@SpringBootApplication
public class ShowMeServerApp extends SpringBootServletInitializer {

    public static void main(String[] args) {
        SpringApplication.run(ShowMeServerApp.class, args);
    }
}
