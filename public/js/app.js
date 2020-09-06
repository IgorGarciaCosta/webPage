console.log('Client side javascript file is loaded!')

var slideIndex = 1;
showDivs(slideIndex); //display first page

function plusDivs(n) { //called when one of the buttons is clicked
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var allSLides = document.getElementsByClassName("mySlides");
    if (n > allSLides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = allSLides.length };
    for (i = 0; i < allSLides.length; i++) {
        allSLides[i].style.display = "none"; //hidden image
    }
    allSLides[slideIndex - 1].style.display = "block"; //shown image
}