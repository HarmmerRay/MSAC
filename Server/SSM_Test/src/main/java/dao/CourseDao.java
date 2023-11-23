package dao;

import entity.Course;

import java.util.List;

public interface CourseDao {
    public Course findById(String id);

    public List<Course> findAll();

    public Course insert(Course course);

    public int deleteById(String id);

    public Course update(Course course);
}
