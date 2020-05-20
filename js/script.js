//Smooth Scrolling
$(".page-scroll").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;
      console.log("IM hash");
      console.log(hash);
      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top - 50
      }, 900, 'easeInOutExpo');
    } // End if
  });

  //about
  $(window).on('load', function(){
      $('.pkiri').addClass('pmuncul');
      $('.pkanan').addClass('pmuncul');
  });
  // Parallax Effect
  $(window).scroll(function(){
    var wScroll = $(this).scrollTop();
    
   //console.log(wScroll);
    $('.jumbotron img').css({
        'transform' : 'translate(0px,'+ wScroll / 4 +'%)'
    });
     $('.jumbotron h1').css({
        'transform' : 'translate(0px,'+ wScroll / 2.2 +'%)'
    });

    $('.jumbotron p').css({
        'transform' : 'translate(0px,'+ wScroll / 1.4  +'%)'
    });   
    
 

    //portofolio
    if ( wScroll > $('.portofolio').offset().top - 300 ){
       $('.portofolio .thumbnail').each(function(i){
          setTimeout(function() {
                $('.portofolio .thumbnail').eq(i).addClass('muncul');
            }, 300 * (i+1));
        });
    }

    //console.log(wScroll);
    if ((wScroll > $('.pkiri').offset().top + 50) && (wScroll > $('.pkiri').offset().top + 50)) {
        $('.pkiri').removeClass('pmuncul');
        $('.pkanan').removeClass('pmuncul');

        
    }
    else if (wScroll == 0 ) {
        $('.pkiri').removeClass('pmuncul');
        $('.pkanan').removeClass('pmuncul');
    }
    else {
        $('.pkiri').addClass('pmuncul');
        $('.pkanan').addClass('pmuncul');
        //$('.pkanan.pmuncul .pkiri.pmuncul').css({'transition': 2+'s'});
    }

    if(wScroll > $('.jumbotron').offset().top + 250){
        $('.jumbotron img').addClass('hilang');
        $('.jumbotron h1').addClass('hilang');
        $('.jumbotron p').addClass('hilang');

    }
    else {
        $('.jumbotron img').removeClass('hilang');
        $('.jumbotron h1').removeClass('hilang');
        $('.jumbotron p').removeClass('hilang');
    }
    
  });