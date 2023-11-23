package dao;

import entity.Course;
import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;
import tools.MybatisUtil;

import java.io.IOException;
import java.io.Reader;
import java.util.List;

/**
 * @projectName: SSM
 * @package: dao
 * @className: CourseDaoImpl
 * @author: HarmmerRay
 * @description: TODO
 * @date: 6/20/2023 1:00 PM
 * @version: 1.0
 */

public class CourseDaoImpl implements CourseDao{
    private SqlSession sqlSession= MybatisUtil.getSession();
    @Override
    public Course findById(String id) {
        return sqlSession.selectOne("dao.CourseDao.findById",id);
    }

    @Override
    public List<Course> findAll() {
        return sqlSession.selectList("dao.CourseDao.findAll");
    }

    @Override
    public Course insert(Course course) {
        sqlSession.insert("dao.CourseDao.insert",course);
        return course;
    }

    @Override
    public int deleteById(String id) {
        return sqlSession.delete("dao.CourseDao.deleteById",id);
    }

    @Override
    public Course update(Course course) {
        sqlSession.update("dao.CourseDao.update",course);
        return course;
    }

}
