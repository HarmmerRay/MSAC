package com.studentmanager.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * @Classname UserController
 * @Description None
 * @Created by Harmmer
 */
@Controller
@RequestMapping("/admin")
public class AdminController {
    @GetMapping("/list")
    public String list(){
        return "/admin/admin_list";
    }
}
