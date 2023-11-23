package controller.demo;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * @projectName: SSM
 * @package: controller.demo
 * @className: SecondController
 * @author: HarmmerRay
 * @description: TODO
 * @date: 6/10/2023 8:17 AM
 * @version: 1.0
 */
@Controller
public class SecondController implements org.springframework.web.servlet.mvc.Controller {
    @RequestMapping("/index.do")
    @Override
    public ModelAndView handleRequest(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse) throws Exception {
        ModelAndView modelAndView=new ModelAndView();
        modelAndView.addObject("msg","我的第一个注解式SpringMVC");
        modelAndView.setViewName("index");
        return modelAndView;
    }
}
