$(document).ready(function() {
   
    /* For the STICKY navigation */
    $('.js--section-features').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
      offset: '60px;' // questo offset serve a definire quanti px prima del waypoint (specificato sopra con la classe) deve azionarsi l'istruzione jquery (scritta su).
    });
    
    
    /* Scroll on buttons */
    $('.js--scroll-to-plan').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
    });
    
    $('.js--scroll-to-start').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
    });
    
    
//    /* Navigation scroll */
//    $(function() {
//    $('a[href*=#]:not([href=#])').click(function() {
//    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
//        var target = $(this.hash);
//        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
//           if (target.length) {
//             $('html,body').animate({
//                 scrollTop: target.offset().top
//            }, 1000);
//            return false;
//           }
//        }
//    });
//  });
    
    /* ANIMATION on Scroll */
    
    $('.js--wp-1').waypoint(function(direction) {
       $('.js--wp-1').addClass('animated fadeIn');  /* Si aggiunge la classe (del foglio css scaricato dal sito animate.css)
                                                     relativa all'effetto che vogliamo */
    }, {
        offset:'50%'
    });
    
    $('.js--wp-2').waypoint(function(direction) {
       $('.js--wp-2').addClass('animated fadeInUp');  
    }, {
        offset:'50%'
    });
    
    $('.js--wp-3').waypoint(function(direction) {
       $('.js--wp-3').addClass('animated fadeIn');  
    }, {
        offset:'50%'
    });
    
    $('.js--wp-4').waypoint(function(direction) {
       $('.js--wp-4').addClass('animated pulse');  
    }, {
        offset:'50%'
    });
    
     /* MOBILE navigation */
    
    $('.js--nav-icon').click(function() {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
        
        nav.slideToggle(200);
        
        if (icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }
        
    });
    
    /* MAPS */
    
    var map = new GMaps({
      div: '.map',
      lat: 40.63986,
      lng: -73.8897386, 
      zoom: 12
    });
    
    map.addMarker({
      lat: 40.63986,
      lng: -74.0209195,
      title: 'New York',
      infoWindow: {
      content: '<p>Alan\'s favourite city</p>'
      }
    });
    
});




