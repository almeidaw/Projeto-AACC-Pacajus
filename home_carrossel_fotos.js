/*
#################################################################################################################
                                          Carrossel de fotos
#################################################################################################################
*/

var slideIndexFoto = 1;
showSlidesFoto(slideIndexFoto);

function plusSlidesFoto(n1) {
  showSlidesFoto(slideIndexFoto += n1);
}

function currentSlideFoto(n1) {
  showSlidesFoto(slideIndexFoto = n1);
}

function showSlidesFoto(n1) {
  var i;
  var slides = document.getElementsByClassName("mySlidesFoto");
  var dots = document.getElementsByClassName("dotFoto");
  if (n1 > slides.length) {
    slideIndexFoto = 1
  }
    if (n1 < 1) {
      slideIndexFoto = slides.length
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
  slides[slideIndexFoto-1].style.display = "inline";
  dots[slideIndexFoto-1].className += " active";
} 

