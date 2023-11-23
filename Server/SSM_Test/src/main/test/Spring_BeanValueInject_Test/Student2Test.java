package Spring_BeanValueInject_Test;

import entity.demo.Student;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

/**
 * @projectName: SSM
 * @package: Spring_BeanValueInject_Test
 * @className: Student2Test
 * @author: HarmmerRay
 * @description: TODO
 * @date: 6/1/2023 2:06 PM
 * @version: 1.0
 */

public class Student2Test {
    public static void main(String[] args) {
        ApplicationContext applicationContext=new ClassPathXmlApplicationContext("applicationContext.xml");
        Student student2= (Student) applicationContext.getBean("student2");
        System.out.println(student2.toString());

        Student student=(Student)applicationContext.getBean("student4");
        System.out.println(student.toString());
    }
}
