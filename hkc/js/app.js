window.onload = function(){
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
    //  updateNav();
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
    e.preventDefault();
    // goToSlide(currentIndex - 1);
    if(currentIndex > 0){
        goToSlide(currentIndex -1);
    } else {
        goToSlide(slideCount - 1)
    }
});
navNext.addEventListener('click',function(e){
    e.preventDefault();
    // goToSlide(currentIndex + 1);
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
function scrollAppear(){
    var sectionText = document.querySelector('.showUp');
    var sectionPosition = sectionText.getBoundingClientRect().top;
        var screenPosition = window.innerHeight / 1.2;
        
        if(sectionPosition < screenPosition){
            sectionText.classList.add('showUp-appear')
        }else{
            sectionText.classList.remove('showUp-appear')
        }
    }
    
    // window.addEventListener('scroll', scrollAppear);
    
function scrollSideAppear(){
        var decoL = document.querySelector('.decoLeft');
        var decoM = document.querySelector('.decoMid');
        var decoR = document.querySelector('.decoRight');
        var decoDesc = document.querySelector('.decoDesc');
        var scrollPosition = window.scrollY;
        if(scrollPosition >= 1000){
            decoL.classList.add('showSide-appear');
            decoM.classList.add('showSide-appear');
            decoR.classList.add('showSide-appear');
            decoDesc.classList.add('decoDesc-appear');
        }
    }

    // window.addEventListener('scroll', scrollSideAppear);

    function scrollItemsAppear(){
        var items = document.querySelector('.itemsSection');
        var scrollPosition = window.scrollY;
        if(scrollPosition >= 1600){
            items.classList.add('items-appear');
        }
    }

    function scrollContactAppear(){
        var contacts = document.querySelector('.contact')
        var scrollPosition = window.scrollY;
        if(scrollPosition >= 2200){
            contacts.classList.add('contact-appear');
        }
    }



    window.addEventListener('scroll', scrollAppear);
    window.addEventListener('scroll', scrollSideAppear);
    window.addEventListener('scroll', scrollItemsAppear);
    window.addEventListener('scroll', scrollContactAppear);
};