package Spring_BeanValueInject_Test;

import entity.demo.Student;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

/**
 * @projectName: SSM
 * @package: Spring_BeanValueInject_Test
 * @className: Student3Test
 * @author: HarmmerRay
 * @description: TODO
 * @date: 6/1/2023 2:20 PM
 * @version: 1.0
 */

public class Student3Test {
    public static void main(String[] args) {
        ApplicationContext applicationContext=new ClassPathXmlApplicationContext("applicationContext.xml");
        Student student3= (Student) applicationContext.getBean("student3");
        System.out.println(student3.toString());
    }
}
