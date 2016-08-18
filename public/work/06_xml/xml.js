/*
服务器返回的数据是xml数据
 */
/*window.onload = function () {
    var req = createReq();
    req.onreadystatechange = function () {
        if(req.readyState == 4 && req.status == 200){
            var doc = req.responseXML;
            //得到所有的<province>, 取第2个, 取出下面所有的<city>, , 取第2个, 得到标签体文本
            var name = doc.getElementsByTagName('province')[1]
                .getElementsByTagName('city')[1]
                .firstChild.nodeValue;
            console.log(name);
        }
    };
    req.open('GET', '/ajax_node/test/xml');
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
};*/
/*
 服务器返回的数据是xml数据
 */
window.onload = function () {

    var req = createReq();
    req.onreadystatechange = function () {
        if(req.readyState==4 && req.status==200) {
            var doc = req.responseXML;
            //得到所有的<province>, 取第2个, 取出下面所有的<city>, , 取第2个, 得到标签体文本
            var name = doc.getElementsByTagName('province')[1]
                .getElementsByTagName('city')[1]
                .firstChild.nodeValue;

            console.log(name);

        }
    };

    req.open('GET', '/ajax_node/test/xml');

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

