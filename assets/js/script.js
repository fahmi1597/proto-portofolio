// Smooth Scrolling
$(".page-scroll").on('click', function (event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;
        console.log("hash : ", $(hash).offset().top)
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
            scrollTop: $(hash).offset().top - 63
        }, 800, 'easeInOutExpo');
    } // End if

});

$(window).scroll(function () {
    var wScroll = $(this).scrollTop();
    
    /* Section header */
    if ( 768 > $(window).width() ){
    $('.jumbotron img').css({
        'transform': 'translate(0px, ' + wScroll / 2.1 + '%)'
    });
    $('.jumbotron h1').css({
        'transform': 'translate(0px, ' + wScroll / 0.6 + '%)'
    });

    $('.jumbotron .p-wrapper').css({
        'transform': 'translate(0px, ' + wScroll / 0.4 + '%)'
    });
    } else {
        $('.jumbotron img').css({
            'transform': 'translate(0px, ' + wScroll / 8 + '%)',
        });
        $('.jumbotron h1').css({
            'transform': 'translate(0px, ' + wScroll / 1.4 + '%)'
        });
    
        $('.jumbotron .p-wrapper').css({
            'transform': 'translate(0px, ' + wScroll / 1.2 + '%)'
        });
    }
    // Parallax Effect
    if (wScroll > $('.jumbotron').offset().top + 240) {
        $('.jumbotron img').addClass('hilang');
        $('.jumbotron h1').addClass('hilang');
        $('.jumbotron .p-wrapper').addClass('hilang');
    }
    else {
        $('.jumbotron img').removeClass('hilang');
        $('.jumbotron h1').removeClass('hilang');
        $('.jumbotron .p-wrapper').removeClass('hilang');
    }
    /* End of Section header */

    /* Section portofolio */

    if (wScroll > $('.portofolio').offset().top - 300) {
        $('.portofolio .thumbnail').each(function (i) {
            setTimeout(function () {
                $('.portofolio .thumbnail').eq(i).addClass('muncul');
            }, 300 * (i + 1));
        });
    }

    /* End of Section about */
});