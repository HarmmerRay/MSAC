package com.studentmanager.service;

import com.studentmanager.domain.Leave;
import com.studentmanager.util.PageBean;

import java.util.Map;

/**
 * @Classname LeaveService
 * @Description None
 * @Created by Harmmer
 */
public interface LeaveService {
    PageBean<Leave> queryPage(Map<String, Object> paramMap);

    int addLeave(Leave leave);

    int editLeave(Leave leave);

    int checkLeave(Leave leave);

    int deleteLeave(Integer id);
}
