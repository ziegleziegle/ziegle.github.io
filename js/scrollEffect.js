window.onload = function(){
    //이력서 스크롤
  var body = document.querySelector('section');

    function scrollContentAppear(){
        var items = document.querySelectorAll('.li');
        var contents = document.querySelector('section')
        var scrollPosition = contents.scrollTop;
            if(scrollPosition >= 500){
                items[0].classList.add('appear')
            }
    }
    function scrollContentAppear2(){
        var items = document.querySelectorAll('.li');
        var contents = document.querySelector('section')
        var scrollPosition = contents.scrollTop;
            if(scrollPosition >= 850){
                items[1].classList.add('appear')
            }
    }
    function scrollContentAppear3(){
        var items = document.querySelectorAll('.li');
        var contents = document.querySelector('section')
        var scrollPosition = contents.scrollTop;
            if(scrollPosition >= 1200){
                items[2].classList.add('appear')
            }
    }
    function scrollContentAppear4(){
        var items = document.querySelectorAll('.li');
        var contents = document.querySelector('section')
        var scrollPosition = contents.scrollTop;
            if(scrollPosition >= 1500){
                items[3].classList.add('appear')
            }
    }
    function scrollContentAppear5(){
        var items = document.querySelectorAll('.li');
        var contents = document.querySelector('section')
        var scrollPosition = contents.scrollTop;
            if(scrollPosition >= 1850){
                items[4].classList.add('appear')
            }
    }
    function scrollContentAppear6(){
        var items = document.querySelectorAll('.li');
        var contents = document.querySelector('section')
        var scrollPosition = contents.scrollTop;
            if(scrollPosition >= 2000){
                items[5].classList.add('appear')
                items[6].classList.add('appear')
            }
    }

    body.addEventListener('scroll', scrollContentAppear);
    body.addEventListener('scroll', scrollContentAppear2);
    body.addEventListener('scroll', scrollContentAppear3);
    body.addEventListener('scroll', scrollContentAppear4);
    body.addEventListener('scroll', scrollContentAppear5);
    body.addEventListener('scroll', scrollContentAppear6);
}



        
