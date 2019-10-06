
/* Navigation */
function toggleNav() {
    document.getElementById("side-menu").style.display = "block";
    document.getElementById("side-menu").style.width = "60%";
    document.getElementById("side-hidden").style.width = "50%";
    document.getElementById("noScroll").style.position = "fixed";
    document.getElementById("noScroll").style.overflowX = "hidden";
    document.getElementById("btn-close").style.color = "#000000";
    document.getElementById("btn-close").style.background = "white";
    document.getElementById("on-top").style.display = "block";
}

function closeSideMenu() {
    document.getElementById("side-menu").style.width = "0";
    document.getElementById("side-hidden").style.width = "0";
    document.getElementById("noScroll").style.position = "relative";
    document.getElementById("btn-close").style.background = "white";
    document.getElementById("btn-close").style.color = "#CE2026";
    document.getElementById("on-top").style.display = "none";
}

/* Button click events for the paintings, etchings, and sculptures pages */

/* Button varibale assignment */
var structures = document.getElementById("structures");
var abstract = document.getElementById("abstract");
var oil = document.getElementById("oil");
var landscapes = document.getElementById("landscapes");

/*Button Gets Clicked */
structures.addEventListener("click", function(clickStructures));
abstract.addEventListener("click", function(clickAbstract));

function clickStructures() {
    /*Structures Button Clicked Style */
    structures.style.background = "#31AECE";
    structures.style.color = "#fff";
    structures.style.border = "none";

    /* Reset Abstract Button */
    abstract.style.background = "transparent";
    abstract.style.color = "#000";
    abstract.style.border = "#000";

    /* Reset Oil Button */
    oil.style.background = "transparent";
    oil.style.color = "#000";
    oil.style.border = "#000";

    /* Reset Landscape Button */
    landscape.style.background = "transparent";
    landscape.style.color = "#000";
    landscape.style.border = "#000";
}

function clickAbstract() {
    /*Abstract Button Clicked Style */
    abstract.style.background = "#31AECE";
    abstract.style.color = "#fff";
    abstract.style.border = "none";

    /* Reset Structures Button */
    structures.style.background = "transparent";
    structures.style.color = "#000";
    structures.style.border = "#000";

    /* Reset Oil Button */
    oil.style.background = "transparent";
    oil.style.color = "#000";
    oil.style.border = "#000";

    /* Reset Landscape Button */
    landscape.style.background = "transparent";
    landscape.style.color = "#000";
    landscape.style.border = "#000";
}