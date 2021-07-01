$(function () {

    const header = $("#header");
    const intro = $("#intro");
    let introHeight;
    let scrollPos = $(window).scrollTop();

    $(window).on("scroll", function () {
        scrollPos = $(this).scrollTop();
        introHeight = intro.innerHeight();

        if (scrollPos > introHeight) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    })
});