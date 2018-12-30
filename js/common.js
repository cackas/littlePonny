//Video bg
$( document ).ready(function() {

    scaleVideoContainer();

    initBannerVideoSize('.video-container .poster img');
    initBannerVideoSize('.video-container .filter');
    initBannerVideoSize('.video-container video');  

    $(window).on('resize', function() {
        scaleVideoContainer();
        scaleBannerVideoSize('.video-container .poster img');
        scaleBannerVideoSize('.video-container .filter');
        scaleBannerVideoSize('.video-container video');
    });

});

function scaleVideoContainer() {

}

function initBannerVideoSize(element){

    $(element).each(function(){
        $(this).data('height', $(this).height());
        $(this).data('width', $(this).width());
    });

    scaleBannerVideoSize(element);

}
//End Video bg

//Slider for Block 3
var slideNow = 1;
var slideCount = $('.bl_3_slides_wrap').children().length;
var slideInterval = 3000;
var navBtnId = 0;
var translateWidth = 0;

$(document).ready(function() {
    $('.slide-nav-btn').click(function() {
        navBtnId = $(this).index();

        if (navBtnId + 1 != slideNow) {
            translateWidth = -$('.bl_3_slider').width() * (navBtnId);
            $('.bl_3_slides_wrap').css({
                'transform': 'translate(' + translateWidth + 'px, 0)',
                '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
                '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
            });
            $(this).addClass('active');            
            slideNow = navBtnId + 1;
        }
    });
});

function nextSlide() {
    if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
        $('.bl_3_slides_wrap').css('transform', 'translate(0, 0)');
        slideNow = 1;
    } else {
        translateWidth = -$('.bl_3_slider').width() * (slideNow);
        $('.bl_3_slides_wrap').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow++;
    }
}

function prevSlide() {
    if (slideNow == 1 || slideNow <= 0 || slideNow > slideCount) {
        translateWidth = -$('.bl_3_slider').width() * (slideCount - 1);
        $('bl_3_slides_wrap').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow = slideCount;
    } else {
        translateWidth = -$('.bl_3_slider').width() * (slideNow - 2);
        $('bl_3_slides_wrap').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow--;
    }
}
//End Slider for Block 3

//Slick Slider for Block 4
$('.bl_4_wrap').slick({
  arrows: false,
  centerMode: true,
  centerPadding: '12%',
  slidesToShow: 3,
  infinite: false,
  responsive: [
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 1,
        centerPadding: '25%',
      }
    },
    {
      breakpoint: 321,
      settings: {
        slidesToShow: 1,
        centerPadding: '0',
      }
    }
  ]
});
$('#prev').on('click', function(){
    $('.bl_4_wrap').slick("slickPrev");
});
$('#next').on('click', function(){
    $('.bl_4_wrap').slick("slickNext");
});

//Кнопка адаптивного меню
(function() {

  "use strict";

  var toggles = document.querySelectorAll(".cmn-toggle-switch");

  for (var i = toggles.length - 1; i >= 0; i--) {
    var toggle = toggles[i];
    toggleHandler(toggle);
  };

  function toggleHandler(toggle) {
    toggle.addEventListener( "click", function(e) {
      e.preventDefault();
      (this.classList.contains("active") === true) ? this.classList.remove("active") : this.classList.add("active");
    });
  }

})();
//---

//Popup
$(document).ready(function() {
    $('.bl_3_frames:first-child').magnificPopup({
        delegate: 'a',
        type: 'image',
        closeOnContentClick: false,
        closeBtnInside: false,
        mainClass: 'mfp-with-zoom mfp-img-mobile',
        gallery: {
            enabled: true
        },
        zoom: {
            enabled: true,
            duration: 300, // don't foget to change the duration also in CSS
            opener: function(element) {
                return element.find('img');
            }
        }
        
    });
    $('.popup-youtube').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,

        fixedContentPos: false
    });
});