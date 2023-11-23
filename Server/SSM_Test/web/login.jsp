<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Academic Affairs Management System</title>

<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path;
%>

<link rel="stylesheet" href="<%=basePath%>/css/bootstrap.css">

    <style>

        body {
            background-image: url(img/car.jpeg);
            color: white;
        }

        .loginBox {
            width: 400px;
            height: 300px;
            position: absolute;
            top: 50%;
            left: 50%;
            margin-left: -200px;
            margin-top: -150px;
        }

        #pwdBox {
            margin-top: 25px;
        }

        .loginBtn{
            height: 40px;
            width: 200px;
            text-align: center;
            margin: auto;
        }

        .loginLabel{
            text-align: center;
            font-size: 2em;
        }

        .button {
            display: inline-block;
            background-color: #4CAF50;
            border: none;
            color: white;
            text-align: center;
            font-size: 16px;
            padding: 10px 24px;
            cursor: pointer;
            border-radius: 25px;
            transition: background-color 0.3s ease;
        }
    </style>
</head>

<body>
    <div class="container">
        <div class="loginBox">
            <form class="form-horizontal" >
                <div class="loginLabel">
                    <label>
                        &nbsp;教与学教务管理系统
                    </label>
                </div>

                <div class="form-group" style="margin-top: 20px;">
                    <label for="loginUser" class="col-sm-2 control-label">  </label>
                    <div class="col-sm-8">
                        <input class="button" id="loginUser" onclick=skip1() value="用户登录" >
                    </div>
                </div>
                <div class="form-group" style="margin-top: 25px;">
                    <label for="loginAdmin" class="col-sm-2 control-label">  </label>
                    <div class="col-sm-8">
                        <input class="button" id="loginAdmin" onclick=skip2() value="管理员登录">

                    </div>
                </div>
                <div class="form-group" style="margin-top: 30px;">
                    <label for="loginTeacher" class="col-sm-2 control-label">  </label>
                    <div class="col-sm-8">
                        <input class="button" id="loginTeacher" onclick=skip3() value="老师登录">
                    </div>
                </div>
            </form>
        </div>
    </div>
    <script type="text/javascript">
        function skip1(){
            window.location="./jsp/loginUser.jsp"
        }
        function skip2(){
            window.location="./jsp/loginAdmin.jsp"
        }
        function skip3(){
            window.location="./jsp/loginTeacher.jsp"
        }
    </script>
</body>

</html>