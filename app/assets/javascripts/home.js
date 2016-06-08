$(document).ready(function() {
    $('#fp-nav ul li a').css('background', 'black');
    var menu = null;
    var visible = 0;
    console.log($("body").width());
    if ($("body").width() < 600) {
        menu = false;
        console.log(menu);
        visible = 1;
    } else {
        menu = true;
        console.log(menu);
        visible = 3;
    }
  $('#fullpage').fullpage({
    //Navigation
    menu: '#menu',
    lockAnchors: false,
    anchors:['firstPage', 'secondPage','thirdPage','fourthPage','fifthPage','sixthPage'],
    navigation: menu,
    navigationPosition: 'right',
    navigationTooltips: ['Главная', 'О компании', 'Инфраструктура', 'Услуги', 'Свободные Помещения', 'Контакты'],
    showActiveTooltip: true,
    slidesNavigation: true,
    slidesNavPosition: 'bottom',
    scrollOverflow: true,
    //Design
    controlArrows: true,
    verticalCentered: false,
    resize : false,
    fixedElements: '#header, .footer',
    responsiveWidth: 0,
    responsiveHeight: 0,
    sectionsColor : ['#ccc', '#3357a1','#e0e0e0','#efefef','#e0e0e0', '#e0e0e0'],
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
        visible: visible,
        autoPlay: false,
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
