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
<h5>修改课程</h5>
<c:forEach var="course" items="${requestScope.courseList}">
		
					<form action="../moditystud/${course.cid}" method="get" name="form1">
						<h6>课程名称</h6>
							<input class="form-control" type="text" name="cname" value="${course.cname }" maxlength="10"></input>
							<h6>课程简介</h6>
							<textarea class="form-control" name="cintroduction" cols="20" rows="6" >${course.cintroduction }</textarea>
							
							<h6>课程类型 ${course.type }</h6>
							<select name="type"
								class="form-control select select-primary select-block mbl">
								<option value="必修">必修</option>
								<option value="选修">选修</option>
							</select>
							
							<h6>系信息 ${course.belongcoll }</h6>
							<select name="belongcoll"
						class="form-control select select-primary select-block mbl" id="belongcoll" onchange="changeSelect(this.selectedIndex)">
						
					</select>
							<h6>专业信息 ${course.belongpro }</h6>
							<select name="belongpro"
						class="form-control select select-primary select-block mbl" id="belongpro">
						
					</select>
						 <br/>	
							<input type="submit" class="btn btn-primary btn-wide login-btn" value="修改"/>
						
					   		    
					</form>
				</c:forEach>	

</div>
</div>
</div>

  <script type="text/javascript">
    var arr_belongcoll = ["所有学院","计算机学院","建筑学院","外国语学院","人文学院"];
    var arr_belongpro = [
                    ["所有专业"],
                    ["网络工程","软件工程","物联网","信息管理","计算机所有专业"],
                    ['土木工程','测绘工程','工程造价', '城市规划','建筑所有专业'],
                    ['英语', '日语', '俄语', '西班牙语', '外国语所有专业'],
                    ['汉语言', '历史', '新闻', '网络新媒体', '人文所有专业'],
                ];
    //网页加载完成，初始化菜单
    window.onload = init;//传入函数地址
    function init(){
        //首先获取对象
        var belongcoll = document.form1.belongcoll;
        var belongpro = document.form1.belongpro;

        //指定省份中<option>标记的个数
        belongcoll.length = arr_belongcoll.length;

        //循环将数组中的数据写入<option>标记中
        for(var i=0;i<arr_belongcoll.length;i++){
            belongcoll.options[i].text = arr_belongcoll[i];
            belongcoll.options[i].value = arr_belongcoll[i];
        }

        //修改学院列表的默认选择项
        var index = 0;
        belongcoll.selectedIndex = index;

        //指定专业中<option>标记的个数
        belongpro.length = arr_belongpro[index].length;

        //循环将数组中的数据写入<option>标记中
        for (var j = 0; j<arr_belongpro[index].length;j++) {
            belongpro.options[j].text = arr_belongpro[index][j];
            belongpro.options[j].value = arr_belongpro[index][j];
        }

    }

    function  changeSelect(index){
        //选择对象
        var belongpro = document.form1.belongpro;
        //修改学院列表的选择项
        belongcoll.selectedIndex = index;

        //指定专业中<option>标记的个数
        belongpro.length = arr_belongpro[index].length;

        //循环将数组中的数据写入<option>标记中
        for (var j = 0; j<arr_belongpro[index].length;j++) {
            belongpro.options[j].text = arr_belongpro[index][j];
            belongpro.options[j].value = arr_belongpro[index][j];
        }
    }

</script>

<script>
		$("select").select2({
			dropdownCssClass : 'dropdown-inverse'
		});
	</script>
<script type="text/javascript" src="/utils/scripts/flat-ui.js"></script><script src="/utils/scripts/bganimation.js"></script></body>
</html>