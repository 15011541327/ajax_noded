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
		//1. 创建一个xmlhttpRequest对象
		var request = createReq();
		//2. 设置回调监听
		request.onreadystatechange = function () {
			if(request.readyState==4 && request.status==200) {
				var result = request.responseText;
				document.getElementById('resultSpan').innerHTML = result;
			}
		};
		//3. 打开一个连接
		request.open('POST', '/node_ajax/test/html');
		//4. 设置请求头, 对请求体数据进行编码处理
		request.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		//5. 发请求
		request.send('username='+this.value);
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