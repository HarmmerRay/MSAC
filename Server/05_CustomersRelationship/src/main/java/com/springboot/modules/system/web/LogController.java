package com.springboot.modules.system.web;

import org.apache.shiro.authz.annotation.RequiresPermissions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.springboot.modules.system.entity.Log;
import com.springboot.modules.system.query.LogQuery;
import com.springboot.modules.system.service.LogService;
import com.springboot.utils.BaseController;
import com.springboot.utils.PageResultSet;


@Controller
@RequestMapping("/log")
public class LogController extends BaseController{

    @Autowired
    private LogService logService;

    @RequiresPermissions("log:view")
    @GetMapping
    public String page(Model model) {
        return "system/log";
    }

    @ResponseBody
    @RequestMapping("/list")
    @RequiresPermissions("log:view")
    public PageResultSet<Log> list(LogQuery log) {
        return logService.findByPage(log);
    }

}
