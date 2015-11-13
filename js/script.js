$(document).ready(function(){
    $(window).resize(function(){
        _onResize();
    });
    _onResize();
    
    function _onResize(){
        var stageWidth = $(window).width();
        var stageHeight = $(window).height();
        var h = $(".img-header").height();
        if (stageWidth > 639) {
            $(".contenu-header").height(h);
        } else {
            $(".contenu-header").height(stageHeight);
        }
    }
    
    
    var stickyNavTop = $('#presentation').offset().top;
    var stickyNav = function(){
        var scrollTop = $(window).scrollTop();
        if (scrollTop > stickyNavTop) { 
            $('.nav').addClass('sticky');
            
        } else {
            $('.nav').removeClass('sticky'); 
        }
    };
    
    stickyNav();
    
    $(window).scroll(function() {
        stickyNav();
    });
    
    $('.diapo').click(function() {
        var id = $(this).attr("data-diapo");
        initDiapo(id);
    }).mouseover(function() {
        $(this).find(".hoverlay").stop().fadeIn();
    }).mouseout(function(){
        $(this).find(".hoverlay").stop().fadeOut();
    });
    
    $('.close').click(function(){
        $(this).parent().fadeOut();
    });
    
    function initDiapo(index){
        for (var i=0;i<4;i++) {
            if (i == index) {
                $("#diapo-open"+i).stop().fadeIn();
            } else {
                $("#diapo-open"+i).stop().fadeOut();
            }
        }
        
    }
    
});