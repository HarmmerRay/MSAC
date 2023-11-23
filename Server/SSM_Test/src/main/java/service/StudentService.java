package service;

import dao.StudentDao;
import entity.Student;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

/**
 * @projectName: SSM
 * @package: service
 * @className: StudentService
 * @author: HarmmerRay
 * @description: TODO
 * @date: 6/5/2023 8:07 PM
 * @version: 1.0
 */
@Component("studentService")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class StudentService {
    @Resource(name = "studentDao")
    private StudentDao studentDao;
    public List<Student> findAll(){
//        WebApplicationContext webApplicationContext= ContextLoader.getCurrentWebApplicationContext();
//        studentDao=webApplicationContext.getBean("studentDao",StudentDaoImpl.class);
        ArrayList<Student> students= (ArrayList<Student>) studentDao.findAll();
        Iterator iterator=students.iterator();
        while (iterator.hasNext()){
            System.out.println(iterator.next());
        }
        return students;
    }
}
