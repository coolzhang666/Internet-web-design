window.onload = function showDate() {
    var hello = document.getElementById("hello");
    var date = new Date();
    var hour = date.getHours();
    var text;
    if(hour >= 5 && hour < 12) {
        text = "早上好";
    }else if(hour >= 12 && hour < 19) {
        text = "下午好";
    }else {
        text = "晚上好";
    }
    hello.innerHTML = "<h3>" + text + "</h3>";
}


function list_response() {
    var ul = document.getElementById("list");
    var list_li = ul.getElementsByTagName("li");
    for(let i = 0; i < list_li.length; i++) {
        list_li[i].onclick = function() {
            alert(this.innerHTML);
        }
    }
}


function input_response() {
    var input_div = document.getElementById("demo");
    var input = document.getElementById("input");
    var text = input.value;
    if(parseFloat(text).toString() == "NaN") {
        alert("请输入数字");
        input.value = "";
    }
    else if(text <= 0 || text > 100) {
        alert("请输入不大于100的正整数");
        input.value = "";
    }else {
        input.value = "";
        input_div.innerHTML = "";
        let i = text;
        while(i >= 1) {
            input_div.innerHTML += ("<p style=\"display:inline-block; margin:5px\">" + text + "</p>");
            i -= 1;
        }
    }
}


function isNum(num) {
    var reNum = /^[0-9]+.?[0-9]*/;
    return(reNum.test(num));
}