package javaTest;

import dao.CourseDao;
import dao.CourseDaoImpl;
import entity.Course;
import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;
import org.junit.Test;

import java.io.IOException;
import java.io.Reader;
import java.util.List;

/**
 * @projectName: SSM
 * @package: javaTest
 * @className: CourseDaoTest
 * @author: HarmmerRay
 * @description: TODO
 * @date: 6/21/2023 10:39 AM
 * @version: 1.0
 */

public class CourseDaoTest {
    static CourseDao courseDao=new CourseDaoImpl();

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
        Course course=courseDao.findById(id);
        System.out.println(course);

    };
    @Test
    public void findAll(){
        List<Course> list=courseDao.findAll();
        for (Course s:
                list) {
            System.out.println(s);
        }

    };
    @Test
    public void insert(){
        Course course=new Course("5","wc++","40","100");
        courseDao.insert(course);

    };
    @Test
    public void deleteById(){
        String id="2";
        courseDao.deleteById(id);

    };
    @Test
    public void update(){
        Course course=new Course("5","wc++","60","100");
        courseDao.update(course);

    };
}
