                                                        /* Forrmatação geral do carrossel de fotos*/

const track = document.querySelector('.carousel_track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel_button--right');
const prevButton = document.querySelector('.carousel_button--left');
const dotsNav = document.querySelector('.carousel_nav');
const dots = Array.from(dotsNav.children);

const slideSize = slides[0].getBoundingClientRect();
const slideWidth = slideSize.width
const slideHeight = slideSize.height

console.log(slideSize);

                                              /* Colocando as fotos uma ao lado da outra*/

const setSlidePosition = (slide,index) => {
  slide.style.left = slideWidth * index + 'px'
};

slides.forEach(setSlidePosition)


                                                      /* Formatação do botão direito*/

const moveToSlide = (track,currentSlide,targetSlide) => {

  track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
  currentSlide.classList.remove('current_slide'); /* Remove a classe current_slide do slide atual */
  targetSlide.classList.add('current_slide') 
    
}

const updateDots = (currentDot,targetDot) => {

  currentDot.classList.remove('current_slide');
  targetDot.classList.add('current_slide');

}

nextButton.addEventListener('click',e => { 

  const currentSlide = track.querySelector('.current_slide');
  const nextSlide = currentSlide.nextElementSibling;
  const currentDot = dotsNav.querySelector('.current_slide');
  const nextDot = currentDot.nextElementSibling;
  const nextIndex = slides.findIndex(slide => slide === nextSlide);

  moveToSlide(track,currentSlide,nextSlide);
  updateDots(currentDot,nextDot);
  hideShowArrows(slides,prevButton,nextButton,nextIndex);

})

                                                    /* Formatação do botão esquerdo*/

prevButton.addEventListener('click',e => {

  const currentSlide = track.querySelector('.current_slide');
  const prevSlide = currentSlide.previousElementSibling;
  const currentDot = dotsNav.querySelector('.current_slide');
  const prevDot = currentDot.previousElementSibling;
  const prevIndex = slides.findIndex(slide => slide === prevSlide);
  

  moveToSlide(track,currentSlide,prevSlide);
  updateDots(currentDot,prevDot);
  hideShowArrows(slides,prevButton,nextButton,prevIndex);

})

                                                    /* Formatação dos pontos pretos abaixo do carrossel */


const hideShowArrows = (slides,prevButton,nextButton,targetIndex) => {

  if (targetIndex === 0 ) {
    prevButton.classList.add('is_hidden');
    nextButton.classList.remove('is_hidden');
  } else if (targetIndex === slides.length - 1) {
    prevButton.classList.remove('is_hidden');
    nextButton.classList.add('is_hidden');
  } else {
    prevButton.classList.remove('is_hidden');
    nextButton.classList.remove('is_hidden');
  }

}

dotsNav.addEventListener('click',e => {

  const targetDot = e.target.closest('button');

  if (!targetDot) return;

  const currentSlide = track.querySelector('.current_slide');
  const currentDot = dotsNav.querySelector('.current_slide');
  const targetIndex = dots.findIndex(dot => dot === targetDot);
  const targetSlide = slides[targetIndex];

  moveToSlide(track,currentSlide,targetSlide);

  currentDot.classList.remove('current_slide');
  targetDot.classList.add('current_slide');
  updateDots(currentDot,targetDot);

  hideShowArrows(slides,prevButton,nextButton,targetIndex)

})