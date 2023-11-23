package com.studentmanager.service;

import com.studentmanager.domain.Admin;

/**
 * @Classname AdminService
 * @Description None
 * @Created by Harmmer
 */
public interface AdminService {

    Admin findByAdmin(Admin admin);


    int editPswdByAdmin(Admin admin);
}
