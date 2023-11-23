package com.house.w.service;

import java.util.List;

import com.house.w.entity.Order;
import com.house.w.entity.Page;
import com.house.w.entity.UserOrder;


public interface IOrderService {
	/**
	 * 添加订单信息
	 * @param order
	 * @return
	 */
	public int addOrder(Order order);
	
	/**
	  * 查询所有订单信息
	  * @return
	  */
	 public List<UserOrder> findAllOrder(Page page);
	 
	 /**
	  * 查询单个用户所有订单
	  * @return
	  */
	 public int getOrderCount(int uID);
	 /**
	  * 删除用户订单
	  * @param oID
	  * @return
	  */
	 public int deleteOrder(int oID);
}
