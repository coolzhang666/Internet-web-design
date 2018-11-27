window.onload = function() {

    var xmlhttp;
    if (window.XMLHttpRequest)
    {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp=new XMLHttpRequest();
    }
    else
    {// code for IE6, IE5
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlhttp.open("POST", "/article", true);
    xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xmlhttp.send();
    xmlhttp.onreadystatechange=function()
    {
        var result = xmlhttp.responseText
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
            // alert(result)
            document.getElementById("article_content").innerHTML = marked(result);
        }
    }

    var qqspan = document.getElementById("qqspan");
    var wechatspan = document.getElementById("wechatspan");
    var qq = document.getElementById("QQ");
    var wechat = document.getElementById("wechat");

    qqspan.onmouseover = function(){
        qq.className = "qqover";
    }
    qqspan.onmouseout = function(){
        qq.className = "qqout";
    }

    wechatspan.onmouseover = function() {
        wechat.className = "wechatover";
    }

    wechatspan.onmouseout = function() {
        wechat.className = "wechatout";
    }

    var github = document.getElementById("github");

    github.addEventListener("click", function(){
        window.open("https://github.com/coolzhang666");
    },false);


    var content = ""; // 需要后端传markdown内容
    document.getElementById("article_content").innerHTML = marked("# 测试\n## 测试\n###test");
}