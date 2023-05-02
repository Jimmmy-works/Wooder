
// change bg header
function bgScroll() {
  let header = document.querySelector(".header");
  let slider = document.querySelector(".hero");
  window.addEventListener("scroll", function () {
    let posYSlider = slider.offsetHeight - header.offsetHeight;
    // có thể dùng offsetheight của queryselector
    let scrollY = window.pageYOffset;

    if (scrollY >= posYSlider  ) {
      header.classList.add("bg");
    } else {
      header.classList.remove("bg");
    }
  });
}
// bgScroll();

// hamberger + nav
const hamberger = document.querySelector('.hamberger');
const nav = document.querySelector('.nav');
const navActive = document.querySelector('.nav .active');
let header = document.querySelector('.header')
function handleHamberger(){
    function gsapnav(){
      gsap.registerPlugin(ScrollTrigger)
      gsap.from(".animate-nav",{
        duration: 0.3,
        opacity:0,
        y: 100,
        stagger:0.15
      })
    }
   
    hamberger.addEventListener('click',function(event){
        event.stopPropagation();
        hamberger.classList.toggle('active')
        nav.classList.toggle("active")
        header.classList.toggle('bg')
       
        if(nav.classList.contains("active") ){
          gsap.registerPlugin(ScrollTrigger)
          gsap.from(".animate-nav",{
            duration: 0.3,
            opacity:0,
            y: 100,
            stagger:0.15
          })
        }else{
          let triggers = ScrollTrigger.getAll();
          triggers.forEach( trigger => {			
            trigger.kill();
          });
        }
    })
   
}

const heightWindow = window.innerHeight;
document.addEventListener("click", function () {
  nav.classList.remove("active");
  hamberger.classList.remove("active");
});

window.addEventListener('resize',function(){
    const widthWindow = window.innerWidth;
    const heightWindow = window.innerHeight;
    if(widthWindow > 992){
        nav.classList.remove("active")
        hamberger.classList.remove("active")
    }
   

})
const menuNavItems = document.querySelectorAll(".nav .nav__inner .nav__inner-menu .item a");
// Remove Active All
function handleMenuNav() {
  let heightHeader = document.querySelector(".header").offsetHeight;
  menuNavItems.forEach(function (menuNavItem, menuItemIndex) {
    // get data href
    let menuNavItemHref = menuNavItem.getAttribute("href");
    // Xử lí Chuỗi
    let replaceNavHref = menuNavItemHref.replace("#", "");
    // Section
    let sectionNav = document.querySelector(`.${replaceNavHref}`);

    menuNavItem.addEventListener("click", function (event) {
      event.preventDefault();
      //   // Xử lí  scroll đến Section
      window.scrollTo({
        top: sectionNav.offsetTop - heightHeader + 1,
        behavior: "smooth",
      });
    });
  });
}

// function clickNav() {
//   backToTop.addEventListener("click", function () {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   });
// }
// Handle Header Menu
const menuItems = document.querySelectorAll(".header .menu .menu__item a");

// Remove Active All
let sections = [];
function removeActiveMenu() {
  menuItems.forEach(function (menuElement, menuElementIndex) {
    menuElement.classList.remove("active");
  });
}
function handleMenu() {
  let heightHeader = document.querySelector(".header").offsetHeight;
  menuItems.forEach(function (menuItem, menuItemIndex) {
    // get data href
    let menuItemHref = menuItem.getAttribute("href");
    // Xử lí Chuỗi
    let replaceHref = menuItemHref.replace("#", "");
    // Section
    let section = document.querySelector(`.${replaceHref}`);
    // Pos scroll sau khi xử lí trừ height Header

    // let scrollSection = section.offsetTop;
    //console.log("sectino: " + replaceHref + ": " + section.offsetTop);
    sections.push(section);
    menuItem.addEventListener("click", function (event) {
      event.preventDefault();
      //   // Xử lí  scroll đến Section
      window.scrollTo({
        top: section.offsetTop - heightHeader + 1,
        behavior: "smooth",
      });
      //   // Remove va active
      // removeActiveMenu();
      // menuItem.classList.add("active");
    });
    // // Scroll -> section -> active
    // // Xu li mang sections
    window.addEventListener("scroll", function (e) {
      let posYWindow = window.pageYOffset;
      let pd = document.querySelector('.pd');
      let mg = document.querySelector('.mg');
      sections.forEach(function (section, sectionIndex) {
        if (
          posYWindow > section.offsetTop - heightHeader &&
          posYWindow < section.offsetTop + section.offsetHeight 
      
        ) {
          removeActiveMenu();
          menuItems[sectionIndex].classList.add("active");
        } 
        else {
          menuItems[sectionIndex].classList.remove("active");
        }
      });
    });
  });
}

// handle language
const language = document.querySelector('.header .language');
const languageCurrent = document.querySelector('.header .language .language__current span');
const languageItems = document.querySelectorAll('.header .language .language__list .language__list-item');
const languageActive = document.querySelector('.header .language .active');
function toggleLanguage(){
    language.addEventListener('click',function(event){
          event.stopPropagation();
          event.preventDefault();
        language.classList.toggle('active')
    })
 
}

function handleLanguage(){
    languageItems.forEach((item) => {
        item.addEventListener('click', function(event){
            let languageText = item.textContent;
            let languageCurrentNow = languageCurrent.textContent;
            languageCurrent.innerHTML = languageText;
            item.innerHTML = languageCurrentNow;
        })
        
    });
}
document.addEventListener("click", function () {
  language.classList.remove("active");
});
//Processbar
const processBar = document.querySelector(".processbar");
function handleProcessBar() {
  window.addEventListener("scroll", function () {
    let scrollY = window.scrollY;
    // Tính % của scroll Y / tổng quãng đường Body
    let percent =
      (scrollY / (document.body.offsetHeight - window.innerHeight)) * 100;
    // Gán width percent cho processBar
    processBar.style.width = `${percent}%`;
  });
}
// Loading tránh trường hợp sai số - load xong rồi mới gọi hàm

//backtotop
const backToTop = document.querySelector(".backtotop");
const slider = document.querySelector(".hero");
let heightHeader = document.querySelector(".header").offsetHeight;
let sectionRemove = document.querySelector(".faqs");
let heightScrollRemoveSection = sectionRemove.offsetTop - heightHeader;
function showBackToTop() {
  window.addEventListener("scroll", function () {
    if (
      window.pageYOffset <= slider.offsetHeight ||
      window.pageYOffset >= heightScrollRemoveSection
    ) {
      backToTop.classList.remove("active");
    } else {
      backToTop.classList.add("active");
    }
  });
}

function clickBacktoTop() {
  backToTop.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}



// hero slider
// const sliderLists = document.querySelectorAll(
//     ".scslider .scslider__wrap .scslider__wrap-item"
//   ),
//   numberPaging = document.querySelector(
//     ".scslider__control .scslider__control-paging .number"
//   ),
//   dots = document.querySelectorAll(
//     ".scslider__control .scslider__control-paging .dots .dots__item"
//   );
// let currentSlider = 0;
// function handleSlider() {
//   sliderLists.forEach(function (slider, sliderIndex) {
//     // Đánh dấu tìm và gán index cho current slider
//     if (slider.classList.contains("active")) {
//       currentSlider = sliderIndex;
//     }
//   });
//   // Remove => .active
//   let next = document.querySelector(".next");
//   // Click next + prev
//   // Xử lí click next
//   next.addEventListener("click", function () {
//     if (currentSlider < sliderLists.length - 1) {
//       // sliderLists[currentSlider].classList.remove("active");
//       // sliderLists[currentSlider + 1].classList.add("active");
//       // currentSlider++;
//       goToIndexSlider(currentSlider + 1);
//     } else {
//       //  sliderLists[currentSlider].classList.remove("active");
//       //   sliderLists[0].classList.add("active");
//       //   currentSlider = 0;
//       goToIndexSlider(0);
//     }
//     numberPaging.innerHTML = (currentSlider + 1).toString().padStart(2, "0");
//   });
//   // Xử lí click Prev
//   let prev = document.querySelector(".prev");
//   prev.addEventListener("click", function () {
//     if (currentSlider > 0) {
//       // sliderLists[currentSlider].classList.remove("active");
//       // sliderLists[currentSlider - 1].classList.add("active");
//       // currentSlider--;
//       goToIndexSlider(currentSlider - 1);
//     } else {
//       // sliderLists[currentSlider].classList.remove("active");
//       // sliderLists[sliderLists.length - 1].classList.add("active");
//       // currentSlider = sliderLists.length - 1;
//       goToIndexSlider(sliderLists.length - 1);
//     }
//     numberPaging.innerHTML = (currentSlider + 1).toString().padStart(2, "0");
//   });
//   // Thay đổi number paging
//   function changeNumber(index) {
//     numberPaging.innerHTML = (currentSlider + 1).toString().padStart(2, "0");
//   }
//   // Thay đổi dots

//   // Click Dot swap silder

//   // Tạo function xử dụng để rút ngắn code
//   function goToIndexSlider(index) {
//     sliderLists[currentSlider].classList.remove("active");
//     sliderLists[index].classList.add("active");
//     dots[currentSlider].classList.remove("active");
//     dots[index].classList.add("active");
//     changeNumber(currentSlider);
//     currentSlider = index;
//   }
//   // function dotsClick() {
//   //   dots.forEach(function (dot, index) {
//   //     dot.addEventListener("click", function () {
//   //       goToIndexSlider(index);
//   //     });
//   //   });
//   // }
//   // dotsClick();
// }

// handleSlider();
function handleHero(){
    var heroSlider = document.querySelector('.hero .slider .slider__list');
    var flktyHeroSlider = new Flickity( heroSlider, {
        cellAlign: "left",
        contain: true,
        lazyLoad: 3,
        wrapAround: true,
        draggable: ">1",
        prevNextButtons: false,
        pageDots: true,
        fade: false,  
        imagesLoaded: true,
    on: {
        ready: function () {
            dots(); 
            // Render xong moi hien DOM
        },
        change: function (index) {
             numbers(index);
        },
      },
    });
    const prev = document.querySelector(".hero .control .control__prev")
    const next = document.querySelector(".hero .control .control__next")
    prev.addEventListener("click", function () {
        flktyHeroSlider.previous(true);
    });
    next.addEventListener("click", function () {
        flktyHeroSlider.next(true);
    });
    function dots(){
        let flickityDots = document.querySelector(".flickity-page-dots");
        let myDots = document.querySelector( ".dots" );
        myDots.appendChild(flickityDots);
      
    }
    function numbers(numb) {
        let number = document.querySelector(".dots .number");
        number.innerHTML = (numb + 1).toString().padStart(2, "0");
      }
    dots();
}

// handle video
const videoPlays = document.querySelectorAll('.quality .quality__video .quality__video-item .thumbnails__play')
const popupvideo = document.querySelector(".popupvideo");
const iframe = document.querySelector(".popupvideo iframe");
const btnClose = document.querySelector(".popupvideo .close")
function handleVideo(){
    videoPlays.forEach(videoPlay => {
        videoPlay.addEventListener('click', function(event){
            event.stopPropagation();
            popupvideo.classList.add("active");
            let dataID = videoPlay.dataset.video;
            iframe.setAttribute("src",` https://www.youtube.com/embed/${dataID}?autoplay=1`);
        })
    });
    btnClose.addEventListener("click", function(){
        popupvideo.classList.remove('active');
        iframe.setAttribute('src', " ")

    })
}
document.addEventListener("click", function () {
  popupvideo.classList.remove('active');
  iframe.setAttribute('src', " ")
});
function handleQualitySlider(){
  const qualityVideo = document.querySelector('.quality .quality__video');
          widthWindow = window.innerWidth;
          if(widthWindow < 768){
          var flktyQuality = new Flickity(qualityVideo, {
            // options
            cellAlign: 'left',
            contain: true,
            freeScroll: false,
            wrapAround:false,
            pageDots: false,
            prevNextButtons: false,
            imagesLoaded: true,
          });
        }
        else{
          var flktyQuality = new Flickity(qualityVideo, {});
          flktyQuality.destroy();
        }
      window.addEventListener('resize', function(){
        widthWindow = window.innerWidth;
          if(widthWindow < 768){
          var flktyQuality = new Flickity(qualityVideo, {
            // options
            cellAlign: 'left',
            contain: true,
            freeScroll: false,
            wrapAround:false,
            pageDots: false,
            prevNextButtons: false,
            imagesLoaded: true,
          });
        }
        else{
          var flktyQuality = new Flickity(qualityVideo, {});
          flktyQuality.destroy();
        }
      })
}
//handle gallery
Fancybox.bind('[data-fancybox="gallery"]', {
    // Your custom options
  });

//handle news
const news = document.querySelectorAll('.news .news__list');
const tabs = document.querySelectorAll('.tabs .tabs__list-item')
function handleNews(){
    tabs.forEach((tab) => {
        tab.addEventListener("click", function () {
        
          // Remove All => .active
          tabs.forEach((tab) => {
            tab.classList.remove("active");
          });
          // Add Class => .active khi click
          tab.classList.add("active");
          // Hide All News List giống như Remove All => .active
          news.forEach((list) => {
            list.classList.remove("active");
          });
          // Get data
          // Cach 1
          let dataID = tab.getAttribute("data-tab");
          // Cach 2
          let dataID2 = tab.dataset.tab;
    
          // Active List number
          let tabListActive = document.querySelector(`.news__list-${dataID}`);
          tabListActive.classList.add("active");
        });
      });
      // window.addEventListener('resize', function(){
      //   widthWindow = window.innerWidth;
      //   news.forEach(list2 => {
      //     var i = 0;
      //     if(widthWindow < 768 && i===0){
      //     var flktyNews = new Flickity(list2, {
      //       // options
      //       cellAlign: 'left',
      //       contain: true,
      //       freeScroll: false,
      //       lazyLoad: 4,
      //       wrapAround:false,
      //       pageDots: false,
      //       prevNextButtons: false,
      //     });
      //   } 
      //   else if (windowsize > 768 && i === 1){
      //     var flktyNews = new Flickity( list2, {
      //     });
      //     flktyNews.destroy();
      //   }
      //   });
      // })

  }
// Handle News
function handleNewsSlider(){
  const newsList = document.querySelectorAll('.news .news__list');
       let widthWindow = window.innerWidth;
        newsList.forEach(list => {
          if(widthWindow < 768){
          var flktyNews = new Flickity(list, {
            // options
            cellAlign: 'left',
            contain: true,
            freeScroll: false,
            lazyLoad: 4,
            wrapAround:false,
            pageDots: false,
            prevNextButtons: false,  
            imagesLoaded: true,
          });
        }
        else{
          var flktyNews = new Flickity( list, {
          });
          flktyNews.destroy();
        }
        });
      window.addEventListener('resize', function(){
        widthWindow = window.innerWidth;
        newsList.forEach(list => {
          if(widthWindow < 768){
          var flktyNews = new Flickity(list, {
            // options
            cellAlign: 'left',
            contain: true,
            freeScroll: false,
            lazyLoad: 4,
            wrapAround:false,
            pageDots: false,
            prevNextButtons: false,  
            imagesLoaded: true,
          });
        }
         else{
          var flktyNews = new Flickity( list, {
          });
          flktyNews.destroy();
        }
        });

      })
      tabs.forEach(tabsList => {
        widthWindow = window.innerWidth;  widthWindow = window.innerWidth;
        tabsList.addEventListener('click',function(){
          newsList.forEach(list => {
            if(widthWindow < 768){
            var flktyNews = new Flickity(list, {
              // options
              cellAlign: 'left',
              contain: true,
              freeScroll: false,
              lazyLoad: 4,
              wrapAround:false,
              pageDots: false,
              prevNextButtons: false,
              imagesLoaded: true,
            });
          } else{
            var flktyNews = new Flickity( list, {
            });
            flktyNews.destroy();
          }
          });
        })
        
      });
}
//handle accordion
const accodions = document.querySelectorAll(".accordion .accordion__item");
function removeActive(index1) {
    accodions.forEach(function (item2, index2) {
    if (index1 != index2) {
      item2.classList.remove("active");
      let desc2 = item2.querySelector(
        ".accordion .accordion__item  .accordion__item-panel .desc"
      );
      desc2.style.height = `0px`;
    }
  });
}
// Toggle Accordion
function handleAccodion() {
  // lặp qua từng item - thêm sự kiên và toggle
  accodions.forEach(function (item, index) {
    let heading = item.querySelector(
      ".accordion .accordion__item  .accordion__item-panel .heading"
    );
    heading.addEventListener("click", function () {
      item.classList.toggle("active");
      // Xử lí cho desc
      let desc = item.querySelector(
        ".accordion .accordion__item  .accordion__item-panel .desc"
      );
      let scrollYDesc = desc.scrollHeight;
      if (item.classList.contains("active")) {
        desc.style.height = `${scrollYDesc}px`;
      } else {
        desc.style.height = `0px`;
      }
      removeActive(index);
    });
  });
}
// Gallery Slider
function handleGallerySlider(){
        widthWindow = window.innerWidth;
        if(widthWindow < 768){
          var gallerySlider = document.querySelector(".gallerySlider .gallerySlider__list");
          var flktyGallerySlider = new Flickity( gallerySlider, {
            cellAlign: "left",
            contain: true,
            draggable: ">1",
            wrapAround: true,
            prevNextButtons: false,
            pageDots: false,
            pauseAutoPlayOnHover: false,
            imagesLoaded: true,
            adaptiveHeight: true,
            freeScroll: false,
          });
        } else{
          var gallerySlider = document.querySelector(".gallerySlider .gallerySlider__list");
          var flktyGallerySlider = new Flickity( gallerySlider, {
            cellAlign: "left",
            contain: true,
            draggable: ">1",
            wrapAround: true,
            prevNextButtons: false,
            pageDots: false,
            pauseAutoPlayOnHover: false,
            imagesLoaded: true,
            freeScroll: true,
            adaptiveHeight: false,

          });
        }
      window.addEventListener('resize',function(){
        widthWindow = window.innerWidth;
        if(widthWindow < 768){
          var gallerySlider = document.querySelector(".gallerySlider .gallerySlider__list");
          var flktyGallerySlider = new Flickity( gallerySlider, {
            cellAlign: "left",
            contain: true,
            draggable: ">1",
            wrapAround: true,
            prevNextButtons: false,
            pageDots: false,
            pauseAutoPlayOnHover: false,
            imagesLoaded: true,
            adaptiveHeight: true,
            freeScroll: false,
          });
        } else{
          var gallerySlider = document.querySelector(".gallerySlider .gallerySlider__list");
          var flktyGallerySlider = new Flickity( gallerySlider, {
            cellAlign: "left",
            contain: true,
            draggable: ">1",
            wrapAround: true,
            prevNextButtons: false,
            pageDots: false,
            pauseAutoPlayOnHover: false,
            imagesLoaded: true,
            freeScroll: true,
            adaptiveHeight: false,

          });
        }
      })
}

// gsap page
function gsapSection(){
  gsap.registerPlugin(ScrollTrigger)
 
  gsap.from(".animate-service-1",{
    scrollTrigger:'.animate-service-1',
    duration: 0.6,
    opacity:0,
    x: -150,
    stagger:0.3
  })
  gsap.from(".animate-service-2",{
    scrollTrigger:'.animate-service-2',
    duration: 0.6,
    opacity:0,
    x: 150,
    stagger:0.3
  })
  gsap.from(".animate-quality",{
    scrollTrigger:'.animate-quality',
    duration: 0.6,
    opacity:0,
    y: 150,
    stagger:0.3
  })
  gsap.from(".animate-design",{
    scrollTrigger:'.animate-design',
    duration: 0.6,
    opacity:0,
    y: 150,
    stagger:0.2,
  })
  gsap.from(".animate-about-1",{
    scrollTrigger:'.animate-about-1',
    duration: 0.6,
    opacity:0,
    x: -150,
    stagger:0.3
  })
  gsap.from(".animate-about-2",{
    scrollTrigger:'.animate-about-2',
    duration: 0.6,
    opacity:0,
    x: 150,
    stagger:0.2
  })
  gsap.from(".animate-gallery-1",{
    scrollTrigger:'.animate-gallery-1',
    duration: 0.6,
    opacity:0,
    y: 150,
    stagger:0.2
  })
  gsap.from(".animate-news",{
    scrollTrigger:'.animate-news',
    duration: 0.6,
    autoAlpha:0,
    y: 150,
    stagger:0.3
  })
  gsap.from('.animate-faqs',{
    scrollTrigger:'.animate-faqs',
    x:150,
    duration:0.6,
    opacity:0,
    stagger:0.15,
  })
  
}
window.addEventListener('load',function(){
  gsapSection();
  handleHamberger();
  handleMenuNav();
  handleMenu();
  toggleLanguage();
  handleLanguage();
  handleProcessBar()
  showBackToTop();
  clickBacktoTop();
  handleHero();
  handleVideo();
  handleQualitySlider()
  handleNews();
  handleNewsSlider();
  handleAccodion();
  handleGallerySlider();
})
function loading() {
  let load = document.querySelector(".loader-mask");
  let loadedCnt = 0;
  let progressBar = document.querySelector(".loader__progress span");
  let progressNumber = document.querySelector(".loader__number span");
  let allImg = document.querySelectorAll("img").length;
  let imgLoad = imagesLoaded("img");
  // getting start
    function onAlways( instance ) {
      console.log('all images are loaded');
    }
    // bind with .on()
    imgLoad.on( 'always', onAlways );
    imgLoad.on( 'progress', function( instance, image ) {
        loadedCnt++;
        // let n = Math.floor((instance.progressedCount / allImg) * 100); Cách 1
        let n = Math.floor((loadedCnt / allImg) * 100); //Cách 2
        progressNumber.innerHTML = n;
        progressBar.style.width = n + "%";
    });
    imgLoad.on( 'done', function( instance ) {
      console.log('DONE  - all images have been successfully loaded');
      load.classList.add("active");
    });
    imgLoad.on( 'fail', function( instance ) {
      console.log('FAIL - all images loaded, at least one is broken');
    });

}
loading()
