// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {

    var link = document.getElementsByClassName("link");
    var nome = document.getElementById("nome");
    var logo = document.getElementById("logo");

    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
        var i;
        for (i = 0; i < link.length; i++) {
            link[i].style.padding = "15.5px 20px";
            link[i].style.fontSize = "16px";
        }

        nome.style.fontSize = "18px";
        nome.style.padding = "16px 0";
        nome.style.margin = "0";
        logo.style.width = "40px";
        logo.style.height = "40px";
        logo.style.margin = "5px 10px";

    } else {
        var i;
        for (i = 0; i < link.length; i++) {
            link[i].style.padding = "39.5px 25px";
            link[i].style.fontSize = "18px";
        }

        nome.style.fontSize = "22px";
        nome.style.padding = "37.5px 0";
        nome.style.margin= "0 0 0 18px";
        logo.style.width = "80px";
        logo.style.height = "80px";
        logo.style.margin = "10px";
    }
}