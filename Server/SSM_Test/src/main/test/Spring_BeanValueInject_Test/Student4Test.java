package Spring_BeanValueInject_Test;

import configs.MyConfig;
import entity.demo.Student;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

/**
 * @projectName: SSM
 * @package: Spring_BeanValueInject_Test
 * @className: Student4Test
 * @author: HarmmerRay
 * @description: TODO
 * @date: 6/7/2023 12:21 PM
 * @version: 1.0
 */

public class Student4Test {
    public static void main(String[] args) {
        ApplicationContext applicationContext=new AnnotationConfigApplicationContext(MyConfig.class);
        Student student4=(Student)applicationContext.getBean("student4",Student.class);
        System.out.println(student4.toString());
    }
}
