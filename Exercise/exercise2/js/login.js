window.onload = function() {
    var span1 = document.getElementById("span1");
    var span2 = document.getElementById("span2");
    span1.addEventListener('click', change1, false);
    span2.addEventListener('click', change2, false);
}

function change1() {
    var signup = document.getElementById("signup");
    var signin = document.getElementById("signin");
    var form1 = document.getElementById("form1");
    var form2 = document.getElementById("form2");
    signup.style.backgroundColor = "rgba(240, 240, 240, 0)";
    signin.style.backgroundColor = "rgba(160, 160, 160, 0.6)";
    form1.style.cssText = "display: block";
    form2.style.cssText = "display: none";
}

function change2() {
    var signup = document.getElementById("signup");
    var signin = document.getElementById("signin");
    var form1 = document.getElementById("form1");
    var form2 = document.getElementById("form2");
    signup.style.backgroundColor = "rgba(160, 160, 160, 0.6)";
    signin.style.backgroundColor = "rgba(240, 240, 240, 0)";
    form1.style.cssText = "display: none";
    form2.style.cssText = "display: block";
}