package com.house.w.service.impl;



import com.house.w.dao.AdminMapper;
import com.house.w.entity.Admin;
import com.house.w.entity.House;
import com.house.w.entity.Page;
import com.house.w.entity.Users;
import com.house.w.service.IAdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class AdminServiceImpl implements IAdminService {

	@Autowired
	private AdminMapper service;

	@Override
	public Admin adminAccess(Admin admin) {
		return service.adminAccess(admin);
	}

	@Override
	public List<Users> findAllUser() {
		return service.findAllUser();
	}

	@Override
	public List<House> findAllHouse(Page page) {
		return service.findAllHouse(page);
	}

	@Override
	public int deleteHouse(int hID) {
		return service.deleteHouse(hID);
	}

	@Override
	public Users findUserById(int uID) {
		return service.findUserById(uID);
	}

	@Override
	public int updateUser(Users users) {
		return service.updateUser(users);
	}
	@Override
	public int deleteUser(int uID) {
		return service.deleteUser(uID);
	}
	@Override
	public Admin checkAdminPwd(Admin admin) {
		return service.checkAdminPwd(admin);
	}
	@Override
	public int updateAdminPwd(Admin admin) {
		return service.updateAdminPwd(admin);
	}
}
