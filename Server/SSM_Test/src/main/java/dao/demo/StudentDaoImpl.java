//package dao.demo;
//
//import entity.demo.Student;
//
//import lombok.AllArgsConstructor;
//import lombok.Data;
//import lombok.NoArgsConstructor;
//import org.apache.ibatis.session.*;
//import org.springframework.context.annotation.Scope;
//import org.springframework.stereotype.Component;
//import tools.MybatisUtil;
//
//import java.util.List;
//
///**
// * @projectName: SSM
// * @package: dao
// * @className: StudentDaoImpl
// * @author: HarmmerRay
// * @description: TODO
// * @date: 3/3/2023 9:39 PM
// * @version: 1.0
// */
//@Scope("prototype")
//@Component("studentDao")
//@NoArgsConstructor
//@AllArgsConstructor
//@Data
//public class StudentDaoImpl implements StudentDao{
//    private SqlSession sqlSession=MybatisUtil.getSession();
//
//
//    @Override
//    public Student findById(String id) {
//        Student student;
//        student=sqlSession.selectOne("selectById",id);
//        sqlSession.close();
//        return null;
//    }
//
//    @Override
//    public List<Student> findAll() {
//        List<Student> list;
//
//        list=sqlSession.selectList("findAll");
//        sqlSession.close();
//        return list;
//    }
//
//    @Override
//    public Student insert(Student student) {
//        sqlSession.insert("insert",student);
//        sqlSession.commit();
//        sqlSession.close();
//        return student;
//    }
//
//    @Override
//    public int deleteById(String id) {
//        int result;
//        result=sqlSession.delete("delete",id);
//        sqlSession.close();
//        sqlSession.commit();
//        return result;
//    }
//
//    @Override
//    public Student update(Student student) {
//        sqlSession.update("update",student);
//        sqlSession.close();
//        sqlSession.commit();
//        return student;
//    }
//}
