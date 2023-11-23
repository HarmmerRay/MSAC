package com.studentmanager.mapper;

import com.studentmanager.domain.Student;

import java.util.List;
import java.util.Map;

/**
 * @Classname StudenetMapper
 * @Description None
 * @Created by Harmmer
 */
public interface StudenetMapper {
    List<Student> queryList(Map<String, Object> paramMap);

    Integer queryCount(Map<String, Object> paramMap);

    int deleteStudent(List<Integer> ids);

    int addStudent(Student student);

    Student findById(Integer sid);

    int editStudent(Student student);

    Student findByStudent(Student student);

    List<Student> isStudentByClazzId(Integer id);

    int editPswdByStudent(Student student);

    int findByName(String name);
}
