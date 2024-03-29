<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
	<head><script type="text/javascript" src="/utils/scripts/flat-ui.js"></script><meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"><link rel="shortcut icon" href="/utils/image/favicon.ico" type="image/x-icon" />
		<meta charset="UTF-8">
		<title>学生信息管理系统</title>
		
		<!-- 标题图标、CSS、js、jQ 
		<link href="/online/image/favicon.ico" rel="shortcut icon">
		<link rel="stylesheet" type="text/css" href="/online/css/main.css">
		<script src="/online/js/fun.js" type="text/javascript"></script>-->
		<script type="text/javascript" src="/utils/js/jquery-3.3.1.min.js"></script>
		<!-- Loading Bootstrap -->
		<link href="/utils/css/vendor/bootstrap.min.css" rel="stylesheet">
		<!-- Loading Flat UI Pro -->
		<link href="/utils/css/flat-ui.css" rel="stylesheet">
		<!-- Loading Flat UI JS -->
		<script type="text/javascript" src="/utils/scripts/flat-ui.min.js"></script>
	<script type='text/javascript' src='/utils/scripts/particles.js'></script><link href="/utils/css/animate.css" rel="stylesheet"></head>

	<body><div id="particles-js"><canvas class="particles-js-canvas-el" width="1322" height="774" style="width: 100%; height: 100%;"></canvas></div>
	<jsp:include page="adminLeft.jsp" />
	<div class="container">
		<div class="row">
			<div class="col-md-6">
			<h2>修改教师</h2>
			<c:forEach var="teacher" items="${requestScope.teacherList}">
					
					<form action="../modityTeac/${teacher.tid}" method="get">
						<h6>姓名</h6>
							<input type="text" name="tname" value="${teacher.tname }" class="form-control"  maxlength="4"></input>
							<h6>密&nbsp;&nbsp;码</h6>
							<input type="password" name="tpassword" class="form-control" value="${teacher.tpassword }"  maxlength="16"></input>
							<h6>性别</h6>
							<c:choose>
								<c:when test="${teacher.tsex == '男'}">
								<label class="radio" for="radio1">
			                  		<input type="radio" name="tsex" value="男" checked id="radio1" data-toggle="radio" class="custom-radio">
			               			<span class="icons">
			               				<span class="icon-unchecked"></span>
			               				<span class="icon-checked"></span>
			               			</span>
			               			<font style="vertical-align: inherit;">
			               				<font style="vertical-align: inherit;">
			               			 		男
			               				</font>
			               			</font>
               					</label>
               					
               					<label class="radio" for="radio2">
			                  		<input type="radio" name="tsex" value="女" id="radio2" data-toggle="radio" class="custom-radio">
			               			<span class="icons">
			               				<span class="icon-unchecked"></span>
			               				<span class="icon-checked"></span>
			               			</span>
			               			<font style="vertical-align: inherit;">
			               				<font style="vertical-align: inherit;">
			               			 		女
			               				</font>
			               			</font>
               					</label>
							
								</c:when>
							
								<c:otherwise>
									
								<label class="radio" for="radio1">
			                  		<input type="radio" name="tsex" value="男"  id="radio1" data-toggle="radio" class="custom-radio">
			               			<span class="icons">
			               				<span class="icon-unchecked"></span>
			               				<span class="icon-checked"></span>
			               			</span>
			               			<font style="vertical-align: inherit;">
			               				<font style="vertical-align: inherit;">
			               			 		男
			               				</font>
			               			</font>
               					</label>
               					
               					<label class="radio" for="radio2">
			                  		<input type="radio" name="tsex" value="女" checked id="radio2" data-toggle="radio" class="custom-radio">
			               			<span class="icons">
			               				<span class="icon-unchecked"></span>
			               				<span class="icon-checked"></span>
			               			</span>
			               			<font style="vertical-align: inherit;">
			               				<font style="vertical-align: inherit;">
			               			 		女
			               				</font>
			               			</font>
               					</label>
							
								</c:otherwise>
							</c:choose>
							
							<h6>个人简介</h6>
							<textarea name="introduction" class="form-control" cols="20" rows="6">${teacher.introduction }</textarea>
						
							<input type="submit" class="btn btn-primary btn-wide login-btn" style="margin-top:2rem" value="修改"/>					    
				    	<br/>				   
					</form>
				</c:forEach>	
			</div>
			</div>
			</div>
	
	<script type="text/javascript" src="/utils/scripts/flat-ui.js"></script><script src="/utils/scripts/bganimation.js"></script></body>
</html>