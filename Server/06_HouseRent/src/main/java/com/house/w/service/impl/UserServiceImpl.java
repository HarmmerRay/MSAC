package com.house.w.service.impl;

import com.house.w.dao.UserMapper;
import com.house.w.entity.Users;
import com.house.w.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class UserServiceImpl implements IUserService {

	@Autowired
	private UserMapper mapper;
	
	@Override
	public Users login(Users user) {
		return mapper.login(user);
	}

	@Override
	public int regist(Users user) {
		return mapper.regist(user);
	}

	@Override
	public int updateUserPwd(Users users) {
		return mapper.updateUserPwd(users);
	}

	@Override
	public Users checkOldPwd(Users users) {
		return mapper.checkOldPwd(users);
	}
}
