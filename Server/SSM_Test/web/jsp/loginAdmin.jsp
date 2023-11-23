<%@ page language="java" contentType="text/html; charset=utf-8"
         pageEncoding="utf-8"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>登录</title>

    <%
        String path = request.getContextPath();
        String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path;
    %>

    <link rel="stylesheet" href="<%=basePath%>/css/bootstrap.css">

    <style>

        body {
            background-image: url("<%=basePath%>/img/2.jpg");
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


    </style>
</head>

<body>
<div class="container">
    <div class="loginBox">
        <form class="form-horizontal" action="<%=basePath%>/loginUrl" method="post">
            <div class="loginLabel">
                <label>
                    教与学教务管理系统-管理员登录
                </label>
            </div>

            <div class="form-group" style="margin-top: 20px;">
                <label for="username" class="col-sm-2 control-label">账号</label>
                <div class="col-sm-8">
                    <input type="text" class="form-control" name="username" id="username" placeholder="username">
                </div>
            </div>
            <div class="form-group" id="pwdBox">
                <label for="password" class="col-sm-2 control-label">密码</label>
                <div class="col-sm-8">
                    <input type="password" class="form-control" name="password" id="password" placeholder="pasword">
                </div>
            </div>

            <div class="loginBtn">
                <button type="submit" class=" btn btn-info loginBtn">登录</button>
            </div>
        </form>
    </div>
</div>
</body>

</html>