window.onload = function () {

    //1. 创建一个xmlhttpRequest对象
    var request = createReq();
    //2. 设置回调监听
    request.onreadystatechange = function () {
        if(request.readyState==4 && request.status==200) {
            var provinceDom = request.responseXML;
            console.log(provinceDom);

            var name = provinceDom.getElementsByTagName('province')[0].getAttribute('id');
            alert(name);
        }
    };
    //3. 打开一个连接
    request.open('GET', '/node_ajax/test/xml');
    //4. 设置请求头, 对请求体数据进行编码处理
    //request.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    //5. 发请求
    request.send();

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

