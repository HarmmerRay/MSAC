package dao;

import entity.Student;

import java.util.List;

public interface StudentDao {

    public Student findById(String id);

    public List<Student> findAll();

    public Student insert(Student student);

    public int deleteById(String id);

    public Student update(Student student);
}
