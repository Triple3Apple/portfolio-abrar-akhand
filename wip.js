var colorChanged = false;

const originalColor = $('#under-construction-text').css('color');
const newColor = '#000000';

setInterval(function () {
    changeWIPColor();
}, 1500);

function changeWIPColor() {
    if (colorChanged) {
        // change text to black and make background of text yellow
        $('#under-construction-text').css('color', originalColor);
        colorChanged = false;
    }
    else {
        // revert/change bg color to none and txt color to yellow

        $('#under-construction-text').css('color', newColor);
        colorChanged = true;
    }
}