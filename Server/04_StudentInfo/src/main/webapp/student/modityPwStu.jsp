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
<jsp:include page="studentLeft.jsp" />
<div class="container">
		<div class="row">
			<div class="col-md-12">
			<h5>修改密码</h5>
			<form
			action="../StudentHandler/moditypasswordstu/${sessionScope.sid }"
			method="get">
			<div class="row">
			
				<div class="col-md-3"><input type="password" name="spassword" class="form-control"  maxlength="16"/> </div>
				<div class="col-md-3"><input type="submit" class="btn btn-primary btn-wide login-btn" value="确定修改" /></div>
				
			</div>
			</form>


			
			

		
			</div></div></div>


<script type="text/javascript" src="/utils/scripts/flat-ui.js"></script><script src="/utils/scripts/bganimation.js"></script></body>
</html>