package com.studentmanager.service;

import com.studentmanager.domain.Attendance;
import com.studentmanager.util.PageBean;

import java.util.Map;

/**
 * @Classname AttendanceService
 * @Description None
 * @Created by Harmmer
 */
public interface AttendanceService {
    PageBean<Attendance> queryPage(Map<String, Object> paramMap);

    boolean isAttendance(Attendance attendance);

    int addAtendance(Attendance attendance);

    int deleteAttendance(Integer id);
}
