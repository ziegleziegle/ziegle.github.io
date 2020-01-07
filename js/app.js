window.onload = function(){

    //탭구현---------------------------------------

    var showAllBtn = document.querySelector('.showAllBtn');
    var categoryBtn = document.querySelectorAll('.category-btn');
    var workLists = document.querySelectorAll('.folio-box > div');
    // console.log(categoryBtn);
    for(var i = 0; i <categoryBtn.length; i++){
        categoryBtn[i].addEventListener("click", function(e){
            e.preventDefault();
            var categoryTarget = e.target.getAttribute("href");
            var listTarget = categoryTarget.replace('#','');
            // console.log(listTarget);
            for(var x =0; x <workLists.length; x++){
                workLists[x].style.display = 'none'
            }

            var forListTarget = document.getElementsByClassName(listTarget);
            for(z=0; z<forListTarget.length; z++){
                forListTarget[z].style.display = "block";
            }
            showAllBtn.classList.remove("activeRect")

            for(var j=0; j< categoryBtn.length; j++){
                categoryBtn[j].classList.remove('activeRect');
                e.target.classList.add('activeRect');
            }
        })
    }
    

    showAllBtn.addEventListener('click',function(e){
      e.preventDefault();
        showAllBtn.classList.add("activeRect")
        var contentAll = document.querySelectorAll('.all');
        for(var y=0; y<contentAll.length; y++){
            // console.log(contentAll[y]);
            contentAll[y].style.display = "block"
        };
        for(var j=0; j< categoryBtn.length; j++){
            categoryBtn[j].classList.remove('activeRect');
        }
    })


    //포트폴리오 모달 구성
    var frontWeb = document.querySelectorAll('.frontWeb');
    var webApp = document.querySelectorAll('.webApp');
    var design = document.querySelectorAll('.design');
    var folioWrap = document.querySelector('.folioWrap');
    var folioLink = document.querySelector('.folioWrap a');
    var closeFolioBtn = document.querySelector('.closeFolioBtn')
    var imgSource = document.querySelector('.imgWrap img');


    //폴리오 모달 닫기 액션
    const modalClose = () =>{
        folioWrap.classList.add('hidden');
    }
    //프론트앱 모달
    for(let i = 0; i < frontWeb.length; i++){
        frontWeb[i].style.background="url('images/frontbg"+i+".png')";
        frontWeb[i].style.backgroundRepeat="no-repeat";
        frontWeb[i].style.backgroundPosition="center";
        frontWeb[i].style.backgroundSize="cover";

        frontWeb[i].addEventListener('click', function(){
            folioWrap.classList.remove('hidden');
            imgSource.src="images/web"+[i]+".jpg";
            var hrefLink = frontWeb[i].dataset.link;
            folioLink.style.display = "block";
            folioLink.setAttribute('href',hrefLink);
        });
};
    //웹앱 모달
    for(let a = 0; a < webApp.length; a++){
        webApp[a].style.background="url('images/webappbg"+a+".jpg')";
        webApp[a].style.backgroundRepeat="no-repeat";
        webApp[a].style.backgroundPosition="center";
        webApp[a].style.backgroundSize="cover";
        webApp[a].addEventListener('click', function(){
            folioWrap.classList.remove('hidden');
            imgSource.src="images/webApp"+[a]+".jpg";
            folioLink.style.display = "none";
        });
};
    //디자인 모달
    for(let b = 0; b < design.length; b++){
        design[b].style.background="url('images/designbg"+b+".jpg')";
        design[b].style.backgroundRepeat="no-repeat";
        design[b].style.backgroundPosition="center";
        design[b].style.backgroundSize="cover";

        design[b].addEventListener('click', function(){
            folioWrap.classList.remove('hidden');
            imgSource.src="images/etc"+[b]+".jpg";
            folioLink.style.display = "none";
        });
};

//폴리오 모달 닫기
    closeFolioBtn.addEventListener('click', modalClose);
    folioWrap.addEventListener('click', modalClose);
}
