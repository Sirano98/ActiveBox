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

    /* Smooth scroll */
    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();
        let elementId = $(this).data("scroll");
        let elementOffset = $(elementId).offset().top;

        $("html").animate({
            scrollTop: elementOffset - 70
        }, 700);
    });
});