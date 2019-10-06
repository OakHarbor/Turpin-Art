
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

/*Button Gets Clicked */

$("#abstract").click(function(){
    $("#abstract").addClass("clicked");
    $("#structures").removeClass("clicked");
    $("#landscapes").removeClass("clicked");
    $("#oil").removeClass("clicked");

    /* image group toggle */
    $("#abstract-content").removeClass("group-remove");
    $("#structures-content").addClass("group-remove");
    $("#landscapes-content").addClass("group-remove");
    $("#oil-content").addClass("group-remove");

    /* This is for the desktop version of the galleries */
    $("#abstract-d").removeClass("group-remove");
    $("#structures-d").addClass("group-remove");
    $("#landscapes-d").addClass("group-remove");
    $("#oil-d").addClass("group-remove");
});

$("#structures").click(function(){
    $("#structures").addClass("clicked");
    $("#abstract").removeClass("clicked");
    $("#landscapes").removeClass("clicked");
    $("#oil").removeClass("clicked");
 
    /* image group toggle */
    $("#structures-content").removeClass("group-remove");
    $("#abstract-content").addClass("group-remove");
    $("#landscapes-content").addClass("group-remove");
    $("#oil-content").addClass("group-remove");

    /* This is for the desktop version of the galleries */
    $("#structures-d").removeClass("group-remove");
    $("#abstract-d").addClass("group-remove");
    $("#landscapes-d").addClass("group-remove");
    $("#oil-d").addClass("group-remove");
});

$("#landscapes").click(function(){
    $("#landscapes").addClass("clicked");
    $("#structures").removeClass("clicked");
    $("#abstract").removeClass("clicked");
    $("#oil").removeClass("clicked");

    /* image group toggle */
    $("#landscapes-content").removeClass("group-remove");
    $("#structures-content").addClass("group-remove");
    $("#abstract-content").addClass("group-remove");
    $("#oil-content").addClass("group-remove");

    /* This is for the desktop version of the galleries */
    $("#landscapes-d").removeClass("group-remove");
    $("#structures-d").addClass("group-remove");
    $("#abstract-d").addClass("group-remove");
    $("#oil-d").addClass("group-remove");
});

$("#oil").click(function(){
    $("#oil").addClass("clicked");
    $("#structures").removeClass("clicked");
    $("#landscapes").removeClass("clicked");
    $("#abstract").removeClass("clicked");

    /* image group toggle */
    $("#oil-content").removeClass("group-remove");
    $("#structures-content").addClass("group-remove");
    $("#landscapes-content").addClass("group-remove");
    $("#abstract-content").addClass("group-remove");

    /* This is for the desktop version of the galleries */
    $("#oil-d").removeClass("group-remove");
    $("#structures-d").addClass("group-remove");
    $("#landscapes-d").addClass("group-remove");
    $("#abstract-d").addClass("group-remove");
});
