package com.studentmanager.service;

import com.studentmanager.util.PageBean;
import com.studentmanager.domain.SelectedCourse;

import java.util.List;
import java.util.Map;

/**
 * @Classname SelectedCourseService
 * @Description None
 * @Created by Harmmer
 */
public interface SelectedCourseService {
    PageBean<SelectedCourse> queryPage(Map<String, Object> paramMap);

    int addSelectedCourse(SelectedCourse selectedCourse);

    int deleteSelectedCourse(Integer id);

    boolean isStudentId(int id);

    List<SelectedCourse> getAllBySid(int studentid);
}
