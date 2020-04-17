/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
 */

/**
 * Define Global Variables
 * 
 */
const fragment = document.createDocumentFragment();
const sections = document.querySelectorAll("section");
const list = document.getElementById("navbar__list");
let goto;

/**
 * End Global Variables
 * Start Helper Functions
 * 
 */
function gotoelement(toelement) {
    toelement.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
}
/**
 * End Helper Functions
 * Begin Main Functions
 * 
 */

// build the nav
function buildnav() {
    for (section of sections) {
        const menuitem = document.createElement("li");
        const linkitem = document.createElement("a");

        linkitem.setAttribute("href", "#" + section.id);
        linkitem.classList.add(section.id, "menu__link");
        linkitem.textContent = section.id;
        menuitem.appendChild(linkitem);
        fragment.appendChild(menuitem);
    }
    list.appendChild(fragment);
};
buildnav();

// Add class 'active' to section when near top of viewport
function makeactive() {
    for (section of sections) {
        let current_a = list.getElementsByClassName(section.id).item("0");
        const box = section.getBoundingClientRect();
        if (box.top <= 200 && box.bottom >= 200) {
            section.classList.add("your-active-class");
            current_a.classList.add("active_menu");
        } else {
            section.classList.remove("your-active-class");
            current_a.classList.remove("active_menu");

        }
    }

}

document.addEventListener("scroll", function() {
    makeactive()
});
// Scroll to anchor ID using scrollTO event

/**0
 * End Main Functions
 * Begin Events
 * 
 */

// Build menu 

// Scroll to section on link click
list.addEventListener("click", function(evt) {
    evt.preventDefault();
    if (evt.target.nodeName === 'A') {
        goto = document.getElementById(evt.target.classList[0]);
        gotoelement(goto);
    }

});
// Set sections as active