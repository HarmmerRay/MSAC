package Spring_BeanValueInject_Test;

import entity.demo.Student;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

/**
 * @projectName: SSM
 * @package: Spring_BeanValueInject_Test
 * @className: Student1Test
 * @author: HarmmerRay
 * @description: TODO
 * @date: 6/1/2023 1:54 PM
 * @version: 1.0
 */

public class Student1Test {
    public static void main(String[] args) {
        ApplicationContext applicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
        Student student1 = (Student) applicationContext.getBean("student1");
        System.out.println(student1.toString());

    }
}