package dao;

import entity.Student;
import org.apache.ibatis.session.SqlSession;
import tools.MybatisUtil;

import java.util.List;

/**
 * @projectName: SSM
 * @package: dao
 * @className: StudentDaoImpl
 * @author: HarmmerRay
 * @description: TODO
 * @date: 6/20/2023 1:00 PM
 * @version: 1.0
 */

public class StudentDaoImpl implements StudentDao{
    private SqlSession sqlSession= MybatisUtil.getSession();

    public SqlSession getSqlSession() {
        return sqlSession;
    }

    public void setSqlSession(SqlSession sqlSession) {
        this.sqlSession = sqlSession;
    }


    @Override
    public Student findById(String id) {
        return sqlSession.selectOne("dao.StudentDao.findById",id);
    }

    @Override
    public List<Student> findAll() {
        return sqlSession.selectList("dao.StudentDao.findAll");
    }

    @Override
    public Student insert(Student student) {
        sqlSession.insert("dao.StudentDao.insert",student);
        return student;
    }

    @Override
    public int deleteById(String id) {
        return sqlSession.delete("dao.StudentDao.deleteById",id);
    }

    @Override
    public Student update(Student student) {
        sqlSession.update("dao.StudentDao.update",student);
        return student;
    }
}
