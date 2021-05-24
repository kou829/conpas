// トップ画像のスライド
const img_src = ["image/コンパス 画像８.jpg","image/コンパス 画像１.jpg","image/コンパス 画像９.jpg"];
      let num = -1;

      function slide_time() {
        if (num === 2) {
          num = 0;
        } else {
          num++;
        }
        document.getElementById("slide_img").src = img_src[num];
      }

      setInterval(slide_time, 3000);


// アニメーション　フワッと表示
const boxElement = document.querySelectorAll(".box");
console.log("画面の高さ", window.innerHeight)
document.addEventListener("scroll", function(){
    for (let i = 0; i < boxElement.length; i++) {
        const getElementDistance = boxElement[i].getBoundingClientRect().top + boxElement[i].clientHeight * 0.6
        if (window.innerHeight > getElementDistance){
            boxElement[i].classList.add("show");
        }
    }
})

// スワイパーのCSS
const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    loop: true,

    autoplay: {
        delay: 3000
    },

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});

// ドロワーメニューバー設定
document.addEventListener('DOMContentLoaded',function() {
    document.getElementById('menuButton').addEventListener("click", function(){
        this.classList.toggle("active");
        document.getElementById("header_nav").classList.toggle("active");
    })
});