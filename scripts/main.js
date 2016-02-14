window.addEffects700 = function() {

    $('#loader-holder').addClass('none');
    $('.index').removeClass('opacity-0');
    $('header.header').removeClass('opacity-0');
    $('.left-pic').removeClass('opacity-0');
    $('.main').removeClass('opacity-0');
    $('.overlay-oscars').removeClass('opacity-0');
    $('.com-theme').removeClass('opacity-0');
}
window.addEffects2700 = function() {

    $('.bg-all').addClass('none');
}

$(function() {
    $(document).foundation();
    setTimeout('addEffects700()', 700);
    setTimeout('addEffects2700()', 2700);


    $('.nav-button').on('click', function() {
        var $this = $(this);
        $('.nav-button').toggleClass('cmenu');
    });

    $('.nav-button').on('click', function() {
        $('.nav-inner').toggleClass('vismen');
    });

    $('nav.nav li').hover(function() {
        $('.nav-inner').toggleClass('menhov');
    });

    $('.list-pic').magnificPopup({
        delegate: 'a.big-pic',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        overflowY: 'auto',
        //- removalDelay: 300,
        mainClass: 'my-mfp-zoom-in',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0,1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function(item) {
                return item.el.attr('alt');
            }
        }
    });
    var pageNav = $('#page-nav');
    pageNav.onePageNav({
        currentClass: 'act-link',
    });
    var navFixClass = "nav-fixed-top";
    var stanchor = $('#' + pageNav.data('stanchor'));
    $(document).scroll(function(){
        var parH = stanchor.offsetParent().offset().top;
        var winH = $(window).scrollTop();
        if(winH > parH){
            if(!pageNav.hasClass(navFixClass)){
                pageNav.addClass(navFixClass);
            }
        }else{
            if(pageNav.hasClass(navFixClass)){
                pageNav.removeClass(navFixClass);
            }
        }
    });

    $('.footer-height').css('height',$('.footer').height() + 50 + 'px');
});
