package javaTest;

import dao.StudentDao;
import dao.StudentDaoImpl;
import entity.Student;
import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;
import org.junit.Test;

import java.io.IOException;
import java.io.Reader;
import java.util.List;
import java.util.Scanner;

/**
 * @projectName: SSM
 * @package: java
 * @className: StudentDaoTest
 * @author: HarmmerRay
 * @description: TODO
 * @date: 3/4/2023 12:21 PM
 * @version: 1.0
 */

public class StudentDaoTest {
    static StudentDao studentDao=new StudentDaoImpl();

    public static void main(String[] args) throws IOException {

    }
    @Test
    public  void testConnection() throws IOException {
        String configPath= "mybatis-config.xml";
        Reader reader= Resources.getResourceAsReader(configPath);
        SqlSessionFactory sqlSessionFactory =  new SqlSessionFactoryBuilder().build(reader);
        SqlSession sqlSession=sqlSessionFactory.openSession();
        sqlSession.getConnection();
        sqlSession.close();
    }
    @Test
    public void findById(){
        String id="1";
        Student student=studentDao.findById(id);
        System.out.println(student);

    };
    @Test
    public void findAll(){
        List<Student> list=studentDao.findAll();
        for (Student s:
             list) {
            System.out.println(s);
        }

    };
    @Test
    public void insert(){
        Student student=new Student("2","1111","test","man"
                ,18,"software2102","information");
        studentDao.insert(student);

    };
    @Test
    public void deleteById(){
        String id="2";
        studentDao.deleteById(id);

    };
    @Test
    public void update(){
        Student student=new Student("1","1111","test","man"
                ,18,"software2102","information");
        studentDao.update(student);

    };
}

