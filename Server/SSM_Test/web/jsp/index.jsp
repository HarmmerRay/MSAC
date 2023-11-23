<%--
  Created by IntelliJ IDEA.
  User: 26247
  Date: 3/16/2023
  Time: 12:00 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
  <head>
    <title>Academic Affairs Management System</title>
    <style>
      .header{top:0; height:60px; background:#426374; padding: 0;}
      .loginWraper{ position:absolute;width:100%; left:0; top:0; bottom:0; right:0; z-index:1; background:#3283AC url("./pictures/img.png") no-repeat center}
      .loginBox{
        position:absolute;
        width:617px;
        height:330px;
        background-image: url(" ./pictures/1662975120805_mAhJZ.jpeg");
        left:50%;
        top:50%;
        margin-left:-309px;
        margin-top:-184px;
        padding-top:38px
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

      .button:hover {
        background-color: #45a049;
      }
    </style>
      </head>
  <body>
    <div class="header" style="padding: 0;">
      <h2 style="color: white; width: 400px; height: 60px; line-height: 60px; margin: 0 0 0 30px; padding: 0;">欢迎登录教与学教务管理系统！</h2>
    </div>

    <div class="loginWraper">
      <div id="loginform" class="loginBox">
        <form id="form" class="form form-horizontal" >
          <div class="row cl">

            <div class="formControls col-8">
              <input class="button" id="loginUser" onclick=skip1() value="用户登录" >
            </div>
          </div>
          <div class="row cl">
            <div class="formControls col-8">
              <input class="button" id="loginAdmin" onclick=skip2() value="管理员登录">
            </div>
          </div>
          <div class="row cl">
            <div class="formControls col-8">
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
