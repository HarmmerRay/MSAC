package dao;

import entity.Teacher;
import org.apache.ibatis.session.SqlSession;
import tools.MybatisUtil;

import java.util.List;

/**
 * @projectName: SSM
 * @package: dao
 * @className: TeacherDaoImpl
 * @author: HarmmerRay
 * @description: TODO
 * @date: 6/20/2023 12:58 PM
 * @version: 1.0
 */

public class TeacherDaoImpl implements TeacherDao{
    private SqlSession sqlSession= MybatisUtil.getSession();
    @Override
    public Teacher findById(String id) {
        return sqlSession.selectOne("dao.TeacherDao.findById",id);
    }

    @Override
    public List<Teacher> findAll() {
        return sqlSession.selectList("dao.TeacherDao.findAll");
    }

    @Override
    public Teacher insert(Teacher teacher) {
        sqlSession.insert("dao.TeacherDao.insert",teacher);
        return teacher;
    }

    @Override
    public int deleteById(String id) {
        return sqlSession.delete("dao.TeacherDao.deleteById",id);
    }

    @Override
    public Teacher update(Teacher teacher) {
        sqlSession.update("dao.TeacherDao.update",teacher);
        return teacher;
    }
}
