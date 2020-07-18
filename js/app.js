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

let nali = document.getElementById("navbar__list");
let sections = document.getElementsByTagName("section");

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function createListItems (section) {
    let listItems = document.createElement('a');
    listItems.innerText = section.getAttribute("data-nav");
    listItems.setAttribute('href',"#"+section.getAttribute("id"));
    return listItems
};
/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
  
for (const section of sections)
{
    nali.appendChild(createListItems(section));
}

// Add class 'active' to section when near top of viewport

document.addEventListener("scroll", () =>{
    let scrollPos = window.scrollY;

    for (let section of sections)
    {
        let nItem = nali.querySelector('[href="#'+section.id+'"]');
        
        if (section.offsetTop -90 <= scrollPos && section.offsetTop + section.offsetHeight-90 > scrollPos) {
            section.classList.add("active");
            nItem.classList.add("active");
        }
        else{
            section.classList.remove("active");
            nItem.classList.remove("active");
        }
    }
});


/**
 * End Main Functions
 * Begin Events
 * 
*/

// hide navbar

let navBar = document.getElementsByClassName("navbar__menu")[0];
(function() {        
    let timer;
    document.addEventListener("scroll",function () {
        let scrollPos = window.scrollY;
        clearTimeout(timer);

        if (scrollPos > 100) {
            timer = setTimeout( hideFn , 1500 );

        }

        navBar.style.display = "block";
    });

    let hideFn = function () { 
        navBar.style.display = "none";
    };

})();

