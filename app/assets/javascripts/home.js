$(document).ready(function() {
    $('#fp-nav ul li a').css('background', 'black');
    var menu = null;
    var visible = 0;
    console.log($("body").width());
    if ($("body").width() < 800) {
        menu = false;
        visible = 1;
    } else {
        menu = true;
        visible = 3;
    }
    $('#fullpage').fullpage({
    //Navigation
    menu: '#menu',
    lockAnchors: false,
    anchors:['main', 'about','infrastructure','services','free-spaces','contucts'],
    navigation: menu,
    navigationPosition: 'right',
    navigationTooltips: ['Главная', 'О компании', 'Инфраструктура', 'Услуги', 'Свободные помещения', 'Контакты'],
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
        $('#fp-nav .active span').css({
            background: 'none',
            border: '2px solid #666',
            borderRadius: '50%'
        });
    }
});
    $('#fp-nav span').css({
        background: '#666'
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
});
