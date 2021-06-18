// Create tooltips once website is fully loaded (jQuery)

$(document).ready(function () {

    tippy('#side-nav-button1', {
        content: 'Home',
        placement: 'right',
        animation: 'shift-toward',
    });

    tippy('#side-nav-button2', {
        content: 'Skills',
        placement: 'right',
        animation: 'shift-toward',
    });

    tippy('#side-nav-button3', {
        content: 'Projects',
        placement: 'right',
        animation: 'shift-toward',
    });

    tippy('#side-nav-button4', {
        content: 'View Resume',
        placement: 'right',
        animation: 'shift-toward',
    });

});