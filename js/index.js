
// -------------intro-----------
$(window).scroll(function intro() {
    if ($(window).width() > 414) {

        if ($(window).scrollTop() > 600) {
            $('.main-text').addClass('act')
            // console.log('abc');
        } else {
            $('.main-text').removeClass('act')
        }
    } else {
        if ($(window).scrollTop() > 50) {
            // console.log('ok');
            $('.main-text ').addClass('act')
            // console.log('abc');
        } else {
            $('.main-text').removeClass('act')
        }
    }

});
// -------------logo----------------
$(window).scroll(function logo() {
    if ($(window).width() > 414) {

        if ($(window).scrollTop() > 600) {
            $('.main-logo').addClass('slideintop')
            // console.log('abc');
        } else {
            $('.main-logo').removeClass('slideintop')
        }
    } else {
        if ($(window).scrollTop() > 350) {
            // console.log('ok');
            $('.main-logo ').addClass('slideintop')
            // console.log('abc');
        } else {
            $('.main-logo').removeClass('slideintop')
        }
    }
});
// ------------------top------------------
$(window).scroll(function VKtop() {
    if ($(window).width() > 414) {

        if ($(window).scrollTop() > 1800) {
            $('.vk-top').addClass('slideinleft')

            // console.log('abc');
        } else {
            $('.vk-top').removeClass('slideinleft')

        }
    } else {
        if ($(window).scrollTop() > 1200) {
            // console.log('ok');
            $('.vk-top ').addClass('slideinleft')
            // console.log('abc');
        } else {
            $('.vk-top').removeClass('slideinleft')
        }
    }
});
// ------------------mid------------------
$(window).scroll(function VKmid() {
    if ($(window).width() > 414) {

        if ($(window).scrollTop() > 2500) {
            $('.vk-mid').addClass('slideinright')
            // console.log('abc');
        } else {
            $('.vk-mid').removeClass('slideinright')
        }
    } else {
        if ($(window).scrollTop() > 1800) {
            // console.log('ok');
            $('.vk-mid').addClass('slideinright')
            // console.log('abc');
        } else {
            $('.vk-mid').removeClass('slideinright')
        }
    }
});
// ------------------down------------------
$(window).scroll(function VKdown() {
    if ($(window).width() > 414) {

        if ($(window).scrollTop() > 2900) {
            $('.vk-down').addClass('slideinleft2')
            // console.log('abc');
        } else {
            $('.vk-down').removeClass('slideinleft2')
        }
    } else {
        if ($(window).scrollTop() > 2400) {
            console.log('ok');
            $('.vk-down ').addClass('slideinleft2')
            // console.log('abc');
        } else {
            $('.vk-down').removeClass('slideinleft2')
        }
    }
});
// --------------introRWD-----------------
$(window).resize(function () {
    var width = $(this).width();

    if (width > 414) {

        intro();

    } else {

    };
    // ------------logoRWD-----------
    if (width > 414) {

        logo();

    } else {

    };
    // -----------topRWD--------------
    if (width > 414) {

        VKtop();

    } else {


    };
    // -----------midRWD--------------
    if (width > 414) {

        VKmid();

    } else {


    };
    // -----------downRWD--------------
    if (width > 414) {

        VKdown();

    } else {


    };

});
