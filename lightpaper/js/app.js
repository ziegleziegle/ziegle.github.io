window.onload = function(){
    
    // 슬라이드
var slideWrapper = document.getElementById('slider'),
sliderContainer = document.getElementsByClassName('slide'),
slides = document.getElementsByClassName('slideEach'),
slideCount = slides.length,
currentIndex = 0,
topHeight = 0,
navPrev = document.getElementById('leftBtn'),
navNext = document.getElementById('rightBtn');

function goToSlide(idx){
 sliderContainer[0].style.left = idx * -100 +'%';
 sliderContainer[0].classList.add('animated') ;
 currentIndex = idx;
//  updateNav();
//  console.log('얍')
}
function updateNav(){
if(currentIndex == 0){
    navPrev.classList.add('disabled');
}else{
    navPrev.classList.remove('disabled');
}

if(currentIndex == slideCount -1){
    navNext.classList.add('disabled');
}else{
    navNext.classList.remove('disabled');
}
}
navPrev.addEventListener('click',function(e){
    if(currentIndex > 0){
        goToSlide(currentIndex -1);
    } else {
        goToSlide(slideCount - 1)
    }
});
navNext.addEventListener('click',function(e){
    if(currentIndex < slideCount - 1){
        goToSlide(currentIndex +1);
    } else {
        goToSlide(0)
    }
});

goToSlide(0);

var percentage = 1;
setInterval(function(){
    var x = document.querySelector('.slide');
    x.style.left = '-'+ percentage +'00%';
    x.classList.add('animated');
    percentage++;
    if(percentage>slideCount-1){
        percentage = 0;
    }
    // console.log("짜잔 "+percentage);
},4000);
var burger = document.getElementById('menuicon');
var menu = document.querySelector('.dpnone')

burger.addEventListener('click', function(){
    menu.classList.toggle('dpnone')
    menu.classList.toggle('visible')
})
}
