$(document).ready(function() {
  $('#fullpage').fullpage({
    //Navigation
    menu: '#menu',
    lockAnchors: false,
    anchors:['firstPage', 'secondPage','thirdPage','fourthPage'],
    navigation: true,
    navigationPosition: 'right',
    navigationTooltips: ['firstSlide', 'secondSlide', 'thirdSlide', 'fourthSlide'],
    showActiveTooltip: true,
    slidesNavigation: true,
    slidesNavPosition: 'bottom',
    //Design
    controlArrows: true,
    verticalCentered: false,
    resize : false,
    fixedElements: '#header, .footer',
    responsiveWidth: 0,
    responsiveHeight: 0,
    sectionsColor : ['#ccc', '#faa','#ccc','#fff'],
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
});
