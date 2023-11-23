package controller.demo;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * @projectName: SSM
 * @package: controller.demo
 * @className: FirstController
 * @author: HarmmerRay
 * @description: TODO
 * @date: 6/8/2023 2:54 PM
 * @version: 1.0
 */

//public class FirstController implements Controller {
////    @RequestMapping("/index.do")
//    @Override
//    public ModelAndView handleRequest(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse) throws Exception {
//        ModelAndView mv=new ModelAndView();
//        mv.addObject("msg","Hello SpringMVC");
//        mv.setViewName("index");
//        return mv;
//    }
//
//}
@Controller
public class FirstController {
    @RequestMapping("/")
    public String academicAffairsManagementSystem(){
        return "index";
    }
}