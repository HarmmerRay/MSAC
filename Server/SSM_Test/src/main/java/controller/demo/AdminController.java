package controller.demo;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * @projectName: SSM
 * @package: controller.demo
 * @className: AdminController
 * @author: HarmmerRay
 * @description: TODO
 * @date: 6/10/2023 11:10 AM
 * @version: 1.0
 */
@Controller
@RequestMapping("/admin")
public class AdminController  {

    @RequestMapping("/login.do")
    public String login(){
        return "loginAdmin";
    }

    @RequestMapping("/register.do")
    public String register(){
        return "registerAdmin";
    }
}
