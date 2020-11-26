/*
#################################################################################################################
                                          Carrossel de fotos
#################################################################################################################
*/
                                                                                                                                                                    
var slideIndexFoto = 1;
showSlidesFoto(slideIndexFoto);

function plusSlidesFoto(n) {
  showSlidesFoto(slideIndexFoto += n);
}

function currentSlideFoto(n) {
  showSlidesFoto(slideIndexFoto = n);
}

function showSlidesFoto(n) {
  var i;
  var slides = document.getElementsByClassName("mySlidesFoto");
  var dots = document.getElementsByClassName("dotFoto");
  if (n > slides.length) {
    slideIndex = 1
  }
    if (n < 1) {
      slideIndex = slides.length
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

