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

    var top = document.getElementById("top");
    var clientHeight = document.documentElement.clientHeight;
    var timer = null;
    var isTop = true;

    window.onscroll = function() {
        //获取滚动条的滚动高度
        var osTop = document.documentElement.scrollTop || document.body.scrollTop; 

        if(osTop >= clientHeight){  //如果滚动高度大于可视区域高度，则显示回到顶部按钮
            top.style.display = 'block';
        }else{         //否则隐藏
            top.style.display = 'none';
        }

        //主要用于判断当 点击回到顶部按钮后 滚动条在回滚过程中，若手动滚动滚动条，则清除定时器
        if(!isTop){

            clearInterval(timer);
        }
        isTop = false;
    }

    top.onclick = function() {
        //设置一个定时器
        timer = setInterval(function(){
            //获取滚动条的滚动高度
            var osTop = document.documentElement.scrollTop || document.body.scrollTop;
            //用于设置速度差，产生缓动的效果
            var speed = Math.floor(-osTop / 6);
            document.documentElement.scrollTop = document.body.scrollTop = osTop + speed;
            isTop =true;  //用于阻止滚动事件清除定时器
            if(osTop == 0){
                clearInterval(timer);
            }
        },30);
    }

    slidbar();
    header();


    var content = ""; // 需要后端传markdown内容
    document.getElementById("article_content").innerHTML = marked("# 测试\n## 测试\n### test\n# 测试\n# 测试\n# 测试\n# 测试\n# 测试\n# 测试\n# 测试\n# 测试\n# 测试\n# 测试\n# 测试\n# 测试\n# 测试\n# 测试\n# 测试\n# 测试\n# 测试\n# 测试\n# 测试\n# 测试\n# 测试\n# 测试\n# 测试\n# 测试\n# 测试\n# 测试\n# 测试\n# 测试\n# 测试\n# 测试\n# 测试\n# 测试\n# 测试\n# 测试\n# 测试\n# 测试\n# 测试\n# 测试\n# 测试\n# 测试\n# 测试\n# 测试\n# 测试\n# 测试\n# 测试\n");
}