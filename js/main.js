
var skillsScrollPos, projectsScrollPos;

// Will hold half the size of a section
// Used to detect when user is halfway on a page
var halfSectionPos;

// update scroll position for the sections when window size changes
$(window).resize(function () {

    skillsScrollPos = $(".hero").height();

    projectsScrollPos = $('.skills-section').height() + skillsScrollPos;
    console.log(`Window resized, skillsScrollPos: ${skillsScrollPos} projectsScrollPos: ${projectsScrollPos}`);

    halfSectionPos = skillsScrollPos / 2;
});

/* The following is only run when the document has fully loaded */
$(document).ready(function () {
    console.log("ready!");
    skillsScrollPos = $(".hero").height();
    console.log(skillsScrollPos);
    projectsScrollPos = $('.skills-section').height() + skillsScrollPos;
    console.log(projectsScrollPos);

    halfSectionPos = skillsScrollPos / 2;

    // Figure out the initial current page when page is loaded.
    currScrollAmount = $(window).scrollTop();
    currPage =
        (currScrollAmount < skillsScrollPos)
            ? 1 :
            (currScrollAmount >= skillsScrollPos && currScrollAmount < projectsScrollPos
                ? 2 : 3);

    // Initialize buttons visibility
    updateNavButtons();

    //projectsScrollPos = $('.projects-section').height() + skillsScrollPos;
    //console.log(projectsScrollPos);

    /* 
    Gets the href of the <a> tag inside .bottom-nav-btn and then goes to the link
    Why did we I do this? Because its better than having the whole btn container being 
    a <a> tag.
    */
    // Credit to: https://css-tricks.com/snippets/jquery/make-entire-div-clickable/
    $(".bottom-nav-btn").click(function () {
        console.log('btn pushed');
        locationToScroll = $(this).find("a").attr("href");

        // Using jQuery's animate() method to add smooth page scroll since smooth scroll is not supported in safari

        $('html, body').animate({
            scrollTop: $(locationToScroll).offset().top
        }, 800);

        return false;

    });

    // For top nav buttons
    $(".top-nav-btn").click(function () {
        console.log('btn pushed');
        locationToScroll = $(this).find("a").attr("href");

        // Using jQuery's animate() method to add smooth page scroll since smooth scroll is not supported in safari

        $('html, body').animate({
            scrollTop: $(locationToScroll).offset().top
        }, 800);

        return false;

    });

    // For sidebar nav buttons
    $(".sidebar-nav-button").click(function () {
        console.log('btn pushed');
        locationToScroll = $(this).find("a").attr("href");

        console.log(locationToScroll);

        // Check if value is undefined or null
        if (locationToScroll == null) {
            console.log('Opened resume');
            return false;
        }

        // Using jQuery's animate() method to add smooth page scroll since smooth scroll is not supported in safari

        $('html, body').animate({
            scrollTop: $(locationToScroll).offset().top
        }, 800);

        return false;

    });

    // For nav buttons scrolling
    $(".nav-button").click(function () {
        console.log('btn pushed');
        locationToScroll = $(this).find("a").attr("href");

        console.log(locationToScroll);

        // Check if value is undefined or null
        if (locationToScroll == null) {
            console.log('Opened resume or socials');
            return false;
        }

        // Using jQuery's animate() method to add smooth page scroll since smooth scroll is not supported in safari

        $('html, body').animate({
            scrollTop: $(locationToScroll).offset().top
        }, 800);

        return false;

    });

    var onNewSection = false;

    // Determines the current location of the user utilizing the the page scroll position.  
    $(window).scroll(function () {
        currScrollAmount = $(window).scrollTop();

        console.log(`current scroll= ${currScrollAmount}, skills pos= ${skillsScrollPos}`);

        // TODO: Make it so the buttons disappear and reappear when on certain part of the page.
        if (currScrollAmount < skillsScrollPos / 2 && currPage != 1) {

            currPage = 1;
            onNewSection = true;

        }
        else if (currScrollAmount >= skillsScrollPos / 2 && currScrollAmount < projectsScrollPos - halfSectionPos && currPage != 2) {

            currPage = 2;
            onNewSection = true;

        } else if (currScrollAmount >= projectsScrollPos - halfSectionPos && currPage != 3) {

            currPage = 3;
            onNewSection = true;
        }


        if (onNewSection) {
            onNewSection = false;

            updateNavButtons();

        }

    });
});

// Change visibility of the buttons based on page the user is on
function updateNavButtons() {

    switch (currPage) {
        case 1:
            /*
            $('#top-nav-btn1').css('visibility', 'hidden');
            $('#top-nav-btn2').css('visibility', 'hidden');

            $('#bottom-nav-btn1').css('visibility', 'visible');
            $('#bottom-nav-btn2').css('visibility', 'visible');
            
            */

            $('#top-nav-btn1').addClass('top-nav-hidden');
            $('#top-nav-btn2').addClass('top-nav-hidden');;

            $('#bottom-nav-btn1').removeClass('bottom-nav-hidden');
            $('#bottom-nav-btn2').removeClass('bottom-nav-hidden');

            break;
        case 2:
            /*
            $('#top-nav-btn1').css('visibility', 'visible');
            $('#top-nav-btn2').css('visibility', 'hidden');

            $('#bottom-nav-btn1').css('visibility', 'hidden');
            $('#bottom-nav-btn2').css('visibility', 'visible');
            */
            $('#top-nav-btn1').removeClass('top-nav-hidden');
            $('#top-nav-btn2').addClass('top-nav-hidden');;

            $('#bottom-nav-btn1').addClass('bottom-nav-hidden');
            $('#bottom-nav-btn2').removeClass('bottom-nav-hidden');

            break;
        case 3:
            /*
            $('#top-nav-btn1').css('visibility', 'visible');
            $('#top-nav-btn2').css('visibility', 'visible');

            $('#bottom-nav-btn1').css('visibility', 'hidden');
            $('#bottom-nav-btn2').css('visibility', 'hidden');
            */
            $('#top-nav-btn1').removeClass('top-nav-hidden');
            $('#top-nav-btn2').removeClass('top-nav-hidden');;

            $('#bottom-nav-btn1').addClass('bottom-nav-hidden');
            $('#bottom-nav-btn2').addClass('bottom-nav-hidden');

            break;
        default:
            console.warn('default use case hit in switch stmt');
    }
}




console.log('main.js loaded');

