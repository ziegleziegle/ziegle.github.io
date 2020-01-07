window.onload = function () {
  
  // 햄버거 메뉴
    var hamburger = document.getElementById("burger");
    var drawer = document.getElementById("drawer");
    var xbtn = document.getElementById("xbtn");
    hamburger.addEventListener("click", showMenu);

    function showMenu() {
      drawer.style.left = "0";
      drawer.style.opacity = "1";
    }
    xbtn.addEventListener("click", closeMenu);

    function closeMenu() {
      drawer.style.left = "-80%";
      drawer.style.opacity = "0";
    }

  // !플레이 관련 --------------------------------------
    //랜덤 앨범
    
    var album = document.getElementById('album')
    var titles = ["Take Me To Church", "Good as Hell", "G.D.F.R.", "Senorita", "Talking Body"];
    var singerName = ["Hozier", "Lizzo", "Flo Rida feat. Sage the Gemini", "Shawn Mendes & Camila Cabello", "Tove Lo"];
    var musicTitle = document.getElementById('title');
    var musicSinger = document.getElementById('singer');
    var rdmNum = Math.floor(Math.random() * titles.length);

    album.src = "img/musicCover"+rdmNum+".jpg";
    musicTitle.innerText=titles[rdmNum];
    musicSinger.innerText=singerName[rdmNum];
    
    
    


// 미니 메뉴
    var sideBtn = document.querySelector('.sideBtn');
    var miniMenu = document.querySelector('.sideMenu');

    sideBtn.addEventListener("click", miniOn);
    var miniOpen = false;
    function miniOn() {
      if (miniOpen === false) {
        sideBtn.style.transform = "rotate(90deg)";
        sideBtn.style.right = "10px";
        miniMenu.style.display = "block";
        console.log('열림')
      } else{
        sideBtn.style.transform = "rotate(0deg)";
        sideBtn.style.right = "30px";
        miniMenu.style.display = "none";
        console.log('닫힘')
      }
        miniOpen = !miniOpen;

    };

    
    // 재생 정지 버튼
    var playBtn = document.getElementById('playBtn');

    playBtn.addEventListener("click", playOnOff);
    var playOn = false;
    function playOnOff() {
      if (playOn === false) {
        playBtn.src = 'img/pause.png'
        console.log('정지')
      } else{
        playBtn.src = 'img/play.png'
        console.log('플레이')
      }
        playOn = !playOn;

    };

    
    // 찜 버튼
    var heartBtn = document.getElementById('heartBtn');

    var red = false;
    heartBtn.addEventListener("click", heartOn);
    function heartOn() {
      if (red === false) {
        heartBtn.src = 'img/redheart.png'
        console.log('찜')
      } else{
        heartBtn.src = 'img/heart.png'
        console.log('찜취소')
      }
        red = !red;

    };


    // 다음곡 버튼
    var nextBtn = document.getElementById('nextBtn');
    nextBtn.onclick = function(){
      location.reload(true);
    }
  };