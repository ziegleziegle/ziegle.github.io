
var slideWrapper = document.getElementsByClassName('hero'),
    sliderContainer = document.getElementsByClassName('slide'),
    slides = document.getElementsByClassName('slideEach'),
    slideCount = slides.length,
    currentIndex = 0,
    topHeight = 0,
    navPrev = document.getElementById('prev'),
    navNext = document.getElementById('next');

function goToSlide(idx){
     sliderContainer[0].style.left = idx * -100 +'%';
     sliderContainer[0].classList.add('animated');
     currentIndex = idx;
     updateNav();
}
function updateNav(){
    if(currentIndex == 0){
        navPrev.classList.add('disabled');
    }else{
        navPrev.classList.remove('disabled');
    }s

    if(currentIndex == slideCount -1){
        navNext.classList.add('disabled');
    }else{
        navNext.classList.remove('disabled');
    }
}
navPrev.addEventListener('click',function(e){
    e.preventDefault();
    goToSlide(currentIndex - 1);
});
navNext.addEventListener('click',function(e){
    e.preventDefault();
    goToSlide(currentIndex + 1);
});

goToSlide(0);