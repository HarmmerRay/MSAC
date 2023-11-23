package Spring_log_Test;

import entity.Student;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import service.StudentService;

import java.util.Iterator;
import java.util.List;

/**
 * @projectName: SSM
 * @package: Spring_log_Test
 * @className: Log_StudentDao
 * @author: HarmmerRay
 * @description: TODO
 * @date: 6/7/2023 12:05 PM
 * @version: 1.0
 */

public class Log_StudentService {
    public static void main(String[] args) {
//        ApplicationContext applicationContext=new AnnotationConfigApplicationContext(MyConfig.class);
//        StudentService studentService=  applicationContext.getBean(StudentService.class);
//        List<Student> list=studentService.findAll();
//        Iterator iterator=list.iterator();
//        while (iterator.hasNext()){
//            System.out.println(iterator.next());
//        }

        ApplicationContext applicationContext=new ClassPathXmlApplicationContext("applicationContext.xml");
        StudentService studentService= (StudentService) applicationContext.getBean("studentService");
        List<Student> list=studentService.findAll();
        Iterator iterator=list.iterator();
        while (iterator.hasNext()){
            System.out.println(iterator.next());
        }
    }
}
