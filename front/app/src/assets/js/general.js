$(document).ready(function() {
    $('.nav-menu').on('click', function() {
        $(this).toggleClass('active');
        $('.navigation').toggleClass('nav-active');
    });
});