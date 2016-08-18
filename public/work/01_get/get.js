/*
 测试get类型的Ajax请求
 1. 创建一个xmlhttpRequest对象
 2. 设置回调监听
 3. 打开一个连接
 4. 发请求
 */
document.getElementById('getBtn').onclick =function () {//发送get ajax 请求
    var username = 'tom';
    //1、创建一个xmlhttprequest对象
    var request = createReq();
    //2、设置回调监听
    request.onreadystatechange = function () {//当readystate值发生改变时调用
    //请求响应完成时&成功响应
        if(request.readyState == 4 && request.status == 200){
            //获取服务器响应后返回的数据
            var result = request.responseText;
            //显示到文档中
            document.getElementById('result').innerHTML = result;
        }
    };
//3.打开一个连接
    //get请求通过url来携带请求参数/work/01_get
    request.open('GET', '/ajax_node/test/get?username=' + username);//默许是异步的
    //4.发请求
    request.send();
   };




 function createReq() {
     var xmlhttp;
     if (window.XMLHttpRequest){// code for IE7+, Firefox, Chrome, Opera, Safari
         xmlhttp=new XMLHttpRequest();
     } else {// code for IE6, IE5
         xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
     }
     return xmlhttp;
 }








































