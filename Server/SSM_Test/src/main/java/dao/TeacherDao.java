package dao;

import entity.Teacher;

import java.util.List;

public interface TeacherDao {
    public Teacher findById(String id);

    public List<Teacher> findAll();

    public Teacher insert(Teacher teacher);

    public int deleteById(String id);

    public Teacher update(Teacher teacher);
}
