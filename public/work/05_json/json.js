/*
服务器返回的数据是json数据
 */
window.onload = function () {
   var req = createReq();
    req.onreadystatechange = function () {
        if(req.readyState == 4 && req.status == 200){
            var json = req.responseText;
            console.log(json);
            //使用JSON转换成对象
            var provinces = JSON.parse(json);
            console.log(provinces);
            //输出吉林市
            var name = provinces[1].citys[1];
            console.log(name);
        }
    };
    req.open('GET','/ajax_node/test/json');
    req.send();


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

