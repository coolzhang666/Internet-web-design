window.onload = function(){
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
}