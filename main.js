// $(window).scroll(function () {
//     if ($(window).scrollTop() + $(window).height() == $(document).height()) {
//         alert("bottom!");
//     }
// });


$(document).ready(function () {
    console.log("ready!");
    skillsScrollPos = $(".hero").height();
    console.log(skillsScrollPos);
    projectsScrollPos = $('.skills-section').height() + skillsScrollPos;
    console.log(projectsScrollPos);

    // Figure out the current page.
    currScrollAmount = $(window).scrollTop();
    currPage =
        (currScrollAmount < skillsScrollPos)
            ? 1 :
            (currScrollAmount >= skillsScrollPos && currScrollAmount < projectsScrollPos
                ? 2 : 3);

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
        window.location = $(this).find("a").attr("href");
        return false;
    });

    // Determines the current location of the user utilizing the the page scroll position.  
    $(window).scroll(function () {
        currScrollAmount = $(window).scrollTop();

        console.log(`current scroll= ${currScrollAmount}, skills pos= ${skillsScrollPos}`);

        // TODO: Make it so the buttons disappear and reappear when on certain part of the page.
        if (currScrollAmount < skillsScrollPos && currPage != 1) {

            alert('first page');
            currPage = 1;

        }
        else if (currScrollAmount >= skillsScrollPos && currScrollAmount < projectsScrollPos && currPage != 2) {

            alert('second page');
            currPage = 2;

        } else if (currScrollAmount >= projectsScrollPos && currPage != 3) {

            alert('third page')
            currPage = 3;
        }

    });
});





console.log('main.js loaded');

