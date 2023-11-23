package com.evaluation.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/")
public class PageController {
    @RequestMapping("/{path}")
    public String intoJsp(@PathVariable String path){
        return path;
    }

    @RequestMapping("/intoTeacherStep")
    public String intoTeacher_step(){

        return "step_teacher";
    }
}
