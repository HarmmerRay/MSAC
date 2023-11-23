package controller.demo;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * @projectName: SSM
 * @package: controller.demo
 * @className: UserController
 * @author: HarmmerRay
 * @description: TODO
 * @date: 6/10/2023 11:10 AM
 * @version: 1.0
 */
@Controller
@RequestMapping("/user")
public class UserController  {
    //    @RequestMapping(value = "/login.do",method = RequestMethod.GET)
    //    @RequestMapping("/*/login.do")   路径级数精准匹配
    //    @RequestMapping("/**/login.do")  路径级数随机匹配

    @RequestMapping("/login.do")
//    public ModelAndView login(@RequestParam("uname") String username, @RequestParam("upassword") String password){  匹配表单和java传参名
//    ① value：指定请求参数的名称。
//    ② required：指定该注解所修饰的参数是否是必须的，boolean 类型。若为true，则表示请求中所携带的参数必须包含当前参数。若为false，则表示有没有均可。
//    ③ defaultValue：指定当前参数的默认值。若请求URI中没有给出当前参数，则当前方法参数将取该默认值。即使required为true，且URI中没有给出当前参数，该处理器方法参数会自动取该默认值，而不会报错。
        public ModelAndView login(String username, String password){
        ModelAndView modelAndView=new ModelAndView();

        if(username.equals("HarmmerRay") && password.equals("8888")){
            modelAndView.addObject("user",username);
            modelAndView.setViewName("success");
        }else {
            modelAndView.setViewName("fail");
        }

        return modelAndView;
    }
    @RequestMapping("/register.do")
    public String register(){
        return "registeruUser";
    }
}
