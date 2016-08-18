/*
 测试post类型的Ajax请求
 1. 创建一个xmlhttpRequest对象
 2. 设置回调监听
 3. 打开一个连接
 4. 设置请求头
 5. 发请求
 */
document.getElementById('postBtn').onclick = function () {
    //1.创建一个xmlhttpRequest对象
    var req = createRequest();
    //2.设置回调监听
    req.onreadystatechange = function () {
        if(req.readyState==4 && req.status==200){
            var result = req.responseText;
            console.log(result);
        }
    };
    //3.打开一个连接
    req.open('POST', '/ajax_node/test/post');
    //4.设置请求头
    req.setRequestHeader('content-type','application/x-www-form-urlencoded');//会对请求体数据进行编码处理
    //5.发请求
    req.send('username=jiajia&&password=123456');
};
function createRequest() {
    var xmlhttp;
    if (window.XMLHttpRequest){// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp=new XMLHttpRequest();
    } else {// code for IE6, IE5
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    return xmlhttp;
}