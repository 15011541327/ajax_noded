/*
 测试Ajax请求返回HTML数据
	服务器端:
		1. response.setContentType("text/html;charset=utf-8")
		2. 输出一个html格式的字符串
	浏览器端js:
		var result = request.responseText;
		document.getElementById("resultDiv").innerHTML = result;
 */
window.onload = function () {
	document.getElementById('name').onblur = function () {
		var req = createReq();
		req.onreadystatechange = function () {
            if(req.readyState==4 && req.status==200){
                var result = req.responseText;
                document.getElementById('resultSpan').innerHTML = result;
            }

		};

	//得到输入框的内容
	var username = this.value;
	//创建连接
	req.open('GET','/ajax_node/test/checkname?username='+username);
	req.send();
    };


	function createReq() {
		var req = null;
		if(window.XMLHttpRequest) {
			req = new XMLHttpRequest();
		} else {
			req = new new ActiveXObject("Microsoft.XMLHTTP");
		}
		return req;
	}
};