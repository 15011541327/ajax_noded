window.onload = function () {

    //1. 创建一个xmlhttpRequest对象
    var request = createReq();
    //2. 设置回调监听
    request.onreadystatechange = function () {
        if(request.readyState==4 && request.status==200) {
            var result = request.responseText;
            console.log(result);
            alert(JSON.parse(result)[0].id);
        }
    };
    //3. 打开一个连接
    request.open('GET', '/node_ajax/test/json');
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

