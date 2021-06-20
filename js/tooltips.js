// Create tooltips once website is fully loaded (jQuery)

$(document).ready(function () {

    tippy('#side-nav-button1', {
        content: '<p class="tooltip-text">Home</p>',
        allowHTML: 'true',
        placement: 'right',
        animation: 'shift-toward',
        touch: 'hold',
        zIndex: 9999,
    });

    tippy('#side-nav-button2', {
        content: '<p class="tooltip-text">Skills</p>',
        allowHTML: 'true',
        placement: 'right',
        animation: 'shift-toward',
        touch: 'hold',
        zIndex: 9999,
    });

    tippy('#side-nav-button3', {
        content: '<p class="tooltip-text">Projects</p>',
        allowHTML: 'true',
        placement: 'right',
        animation: 'shift-toward',
        touch: 'hold',
        zIndex: 9999,
    });

    tippy('#side-nav-button4', {
        content: '<p class="tooltip-text">View Resume</p>',
        allowHTML: 'true',
        placement: 'right',
        animation: 'shift-toward',
        touch: 'hold',
        zIndex: 9999,
    });

});