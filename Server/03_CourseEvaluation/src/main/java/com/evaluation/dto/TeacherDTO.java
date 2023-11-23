package com.evaluation.dto;

import com.evaluation.entity.TeacherEntity;


public class TeacherDTO extends TeacherEntity {

    Integer[] courseIds;

    public Integer[] getCourseIds() {
        return courseIds;
    }

    public void setCourseIds(Integer[] courseIds) {
        this.courseIds = courseIds;
    }
}
