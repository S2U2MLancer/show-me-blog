package com.s2u2m.prod.showme.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class IndexController {

    @GetMapping("/index/{ping}")
    public String pingPong(@PathVariable String ping) {
        return ping;
    }
}
