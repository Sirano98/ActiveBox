$(function () {

    /* Fixed header */
    const header = $("#header");
    const intro = $("#intro");
    let introHeight;
    let scrollPos = $(window).scrollTop();

    $(window).on("scroll load resize", function () {
        scrollPos = $(this).scrollTop();
        introHeight = intro.innerHeight();

        if (scrollPos > introHeight) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    })
});