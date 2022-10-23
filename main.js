const primaryNav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {
    var visibility = primaryNav.getAttribute("data-visible");

    if (visibility === "false") {
        primaryNav.setAttribute("data-visible", "true");
        navToggle.setAttribute("aria-expanded", true);
    } else if (visibility === "true") {
        primaryNav.setAttribute("data-visible", "false");
        navToggle.setAttribute("aria-expanded", false);
    }

    var visibility = primaryNav.getAttribute("data-visible");
    //console.log(visibility);
});


//toggle hamburger and x when clicked
navToggle.addEventListener("click", () => {
    const initialText = '';
    if (navToggle.textContent == '') {
        navToggle.textContent = 'X';
        navToggle.setAttribute('style', 'background-image: none; background-color: #87ceeb ');
    } else {
        navToggle.textContent = initialText;
        navToggle.removeAttribute('style');
    }
    
});

//select.html part
//convert Hide,Show courses
const showHide = document.getElementById("random");
const innerDisplay = document.getElementById("innerBorder");

showHide.addEventListener("click", () => {
    
    if (showHide.textContent == 'Show Courses') {
        showHide.textContent = 'Hide Courses';
    } else {
        showHide.textContent = 'Show Courses';
        innerDisplay.setAttribute('style', 'display: none');
    }

});












