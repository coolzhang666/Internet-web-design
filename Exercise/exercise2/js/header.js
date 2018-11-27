function header() {
    var menu = document.getElementById("menu");
    var nav = document.getElementById("nav");
    var flag = true;


    menu.addEventListener("click", function() {
        if (flag) {
            // nav.style.cssText = "display: block";
            nav.className = "show nav";
            flag = false;
        }
        else {
            // nav.style.cssText = "display: none";
            nav.className = "hidden nav";
            flag = true;
        }
    }, false);
}