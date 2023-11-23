package entity.demo;
import lombok.*;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;

/**
 * @projectName: SSM
 * @package: entity
 * @className: Student
 * @author: HarmmerRay
 * @description: TODO
 * @date: 3/2/2023 9:51 PM
 * @version: 1.0
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
//@Scope("singleton")//单例模式 只实例化一次  默认这个
@Scope("prototype") //相当于new 每次都会新建一个
//@PropertySource(value={"yaml/student.yml"},ignoreResourceNotFound = true,encoding = "UTF-8")
@Component("student4")
public class Student {
    @Value("1")
    private String id;
    @Value("赵阳")
    private String name;
    @Value("18")
    private int age;
    @Value("男")
    private String gender;
//    @Value("${class}")  //1.@Value 不可以封装自定义复杂数据类型  但可以封装数组

//    @Autowired(required = false)   2.//按照类型装配 在Clazz类中各个属性加入@Value即可使用  注意Clazz类上方要有@Compnent("class") "class"名字任意，但要有名字 意为对象Bean的实例名
//    @Qualifier("class")              //按照BeanId装配
    @Resource(name = "class")   //既可按照类型 又可按照BeanId  无参数默认类型  有参数就用BeanId   虽然爆红但能运行
    private CLazz cLazz;


}
