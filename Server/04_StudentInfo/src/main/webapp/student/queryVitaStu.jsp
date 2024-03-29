<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head><script type="text/javascript" src="/utils/scripts/flat-ui.js"></script><meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"><link rel="shortcut icon" href="/utils/image/favicon.ico" type="image/x-icon" />
<meta charset="UTF-8">
<title>学生信息管理系统</title>

<!-- 标题图标、CSS、js、jQ
<link href="/online/image/favicon.ico" rel="shortcut icon">
<link rel="stylesheet" type="text/css" href="/online/css/main.css">
<script src="/online/js/fun.js" type="text/javascript"></script> -->
<script type="text/javascript" src="/utils/js/jquery-3.3.1.min.js"></script>
<!-- Loading Bootstrap -->
<link href="/utils/css/vendor/bootstrap.min.css" rel="stylesheet">
<!-- Loading Flat UI Pro -->
<link href="/utils/css/flat-ui.css" rel="stylesheet">
<!-- Loading Flat UI JS -->
<script type="text/javascript" src="/utils/scripts/flat-ui.min.js"></script>

<script type='text/javascript' src='/utils/scripts/particles.js'></script><link href="/utils/css/animate.css" rel="stylesheet"></head>

<body><div id="particles-js"><canvas class="particles-js-canvas-el" width="1322" height="774" style="width: 100%; height: 100%;"></canvas></div>
<jsp:include page="studentLeft.jsp" />
<div class="container">
		<div class="row">
			<div class="col-md-12">
			<div class="row"><div class="col-md-12" >
			<h5>管理个人信息</h5>
						<div class="margin:0 15px" style="overflow-x: scroll;"><table  style="overflow:scroll;" class="table table-striped table-hover animated fadeIn">

				<thead>
					<tr>
						<th>/</th>
						<th>信息</th>
						<th>介绍</th>
					</tr>
				</thead>
				<tr>
					<td>学号</td>
					<td>${sid }</td>
					<td>学生信息唯一标示</td>
				</tr>

				<tr>
					<td>姓名</td>
					<td>${sname }</td>
					<td>不可修改</td>
				</tr>

				<tr>
					<td>身份证</td>
					<td>${requestScope.sidcard }</td>
					<td>不可修改</td>
				</tr>

				<tr>
					<td>性别</td>
					<td>${requestScope.ssex }</td>
					<td>不可修改</td>
				</tr>

				<tr>
					<td>密码</td>
					<td>${requestScope.spassword }</td>
					<td><a class="btn btn-default" href="/StudentHandler/moditypwstu/${sessionScope.sid }">修改 </a></td>
				</tr>

				<tr>
					<td>年龄</td>
					<td>${requestScope.sage }</td>
					<td>不可修改</td>
				</tr>


				<tr>
					<td>班级</td>
					<td>${requestScope.classr }</td>
					<td>不可修改</td>
				</tr>


				<tr>
					<td>专业</td>
					<td>${requestScope.profession }</td>
					<td>不可修改</td>
				</tr>
				<tr>
					<td>学院</td>
					<td>${requestScope.college }</td>
					<td>不可修改</td>
				</tr>
				<tr>
					<td>已获学分</td>
					<td>${requestScope.credits }</td>
					<td>不可修改</td>
				</tr>


			</table></div></div></div>
			</div></div></div>
	
<script type="text/javascript" src="/utils/scripts/flat-ui.js"></script><script src="/utils/scripts/bganimation.js"></script></body>
</html>