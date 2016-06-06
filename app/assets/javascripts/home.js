$(document).ready(function() {
    console.log($("body").width());
    if ($("body").width() < 600) {
        console.log("poink");
    }
  $('#fullpage').fullpage({
    //Navigation
    menu: '#menu',
    lockAnchors: false,
    anchors:['firstPage', 'secondPage','thirdPage','fourthPage','fifthPage'],
    navigation: true,
    navigationPosition: 'right',
    navigationTooltips: ['firstSlide', 'secondSlide', 'thirdSlide', 'fourthSlide', 'fifthSlide'],
    showActiveTooltip: true,
    slidesNavigation: true,
    slidesNavPosition: 'bottom',
    autoScrolling: false,
    //Design
    controlArrows: true,
    verticalCentered: false,
    resize : false,
    fixedElements: '#header, .footer',
    responsiveWidth: 0,
    responsiveHeight: 0,
    sectionsColor : ['#ccc', '#3357a1','#e0e0e0','#fff','#fff'],
    //Events
    afterLoad: function(anchorLink, index){
        console.log(anchorLink);
        if (anchorLink === 'firstPage') {
            $('.home>h1').addClass('animated fadeInLeft');
        }
        if(anchorLink === 'secondPage'){
            $('.second>h1').addClass('animated slideInDown');
        }
    }
  });
    $('#fp-nav span').css({
        background: '#e6e6e6'
    });

    $('#fp-nav .active span').css({
        background: 'none',
        border: '2px solid #e6e6e6',
        borderRadius: '50%'
    });

    jQuery('.slider').lbSlider({
        leftBtn: '.sa-left',
        rightBtn: '.sa-right',
        visible: 3,
        autoPlay: true,
        autoPlayDelay: 5
    });

    $('.comments-link').click(function() {
        console.log("click");
        $('.modal-login').show();
    });

    jQuery(".section-home-info>h1").fitText(1.2, { minFontSize: '30px', maxFontSize: '50px' });
    jQuery(".section-home-info>p").fitText(1.2, { minFontSize: '15px', maxFontSize: '19px' });
    jQuery(".section-home-info>h4").fitText(1.2, { minFontSize: '18px', maxFontSize: '21px' });

});
