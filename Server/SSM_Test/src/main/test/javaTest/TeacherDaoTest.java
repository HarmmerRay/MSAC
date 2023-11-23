package javaTest;

import dao.TeacherDao;
import dao.TeacherDaoImpl;
import entity.Teacher;
import org.junit.Test;

import java.util.List;

/**
 * @projectName: SSM
 * @package: javaTest
 * @className: TeacherDaoTest
 * @author: HarmmerRay
 * @description: TODO
 * @date: 6/21/2023 10:39 AM
 * @version: 1.0
 */

public class TeacherDaoTest {
   static TeacherDao teacherDao=new TeacherDaoImpl();
    public static void main(String[] args) {
        
    }
    @Test
    public void findById(){
        String id="1";
        Teacher teacher=teacherDao.findById(id);
        System.out.println(teacher);

    };
    @Test
    public void findAll(){
        List<Teacher> list=teacherDao.findAll();
        for (Teacher s:
                list) {
            System.out.println(s);
        }

    };
    @Test
    public void insert(){
        Teacher teacher=new Teacher("2","1111","赵老师","信息学院");
        teacherDao.insert(teacher);

    };
    @Test
    public void deleteById(){
        String id="2";
        teacherDao.deleteById(id);

    };
    @Test
    public void update(){
        Teacher teacher=new Teacher("1","1111","小赵老师","机械学院");
        teacherDao.update(teacher);

    };
}
