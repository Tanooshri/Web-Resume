$(document).ready(function(){
    $("#main-nav a").click(function(){
        $("section").removeClass("show");
        var target = $(this).attr("href");
        $(target).addClass("show");
    });
    $(".type-effect").typed({
        strings: ["Full Stack Developer","Designer"],
        typeSpeed: 1,
        backSpeed: 1,
        loop: true,
    })
});