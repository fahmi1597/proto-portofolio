// Smooth Scrolling
$(".page-scroll").on('click', function (event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
            scrollTop: $(hash).offset().top - 50
        }, 900, 'easeInOutExpo');
    } // End if

});
// Animate paragraph within about section on first load.
// $(window).on('load', function () {
//     $('.p-kiri').addClass('p-muncul');
//     $('.p-kanan').addClass('p-muncul');
// });

$(window).scroll(function () {
    var wScroll = $(this).scrollTop();
    //console.log(wScroll);

    /* Section header */
    $('.jumbotron img').css({
        'transform': 'translate(0px, ' + wScroll / 8 + '%)',
    });
    $('.jumbotron h1').css({
        'transform': 'translate(0px, ' + wScroll / 2 + '%)'
    });

    $('.jumbotron p').css({
        'transform': 'translate(0px, ' + wScroll / 1.2 + '%)'
    });

    // Parallax Effect
    if (wScroll > $('.jumbotron').offset().top + 250) {
        $('.jumbotron img').addClass('hilang');
        $('.jumbotron h1').addClass('hilang');
        $('.jumbotron p').addClass('hilang');

    }
    else {
        $('.jumbotron img').removeClass('hilang');
        $('.jumbotron h1').removeClass('hilang');
        $('.jumbotron p').removeClass('hilang');
    }
    /* End of Section header */

    /* Section about */
    // Bad calculation
    // if ((wScroll > $('.p-kiri').offset().top + 50)) {
    //     $('.pKiri').removeClass('pMuncul');
    //     $('.p-kanan').removeClass('pMuncul');
    // }
    // else if (wScroll == 0) {
    //     $('.pkiri').removeClass('pmuncul');
    //     $('.pkanan').removeClass('pmuncul');
    // }
    // else {
    //     $('.pkiri').addClass('pmuncul');
    //     $('.pkanan').addClass('pmuncul');
    //     //$('.pkanan.pmuncul .pkiri.pmuncul').css({'transition': 2+'s'});
    // }

    /* End of Section about */

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