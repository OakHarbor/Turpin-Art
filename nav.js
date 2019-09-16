function toggleNav() {
    document.getElementById("side-menu").style.display = "block";
    document.getElementById("side-menu").style.width = "60%";
    document.getElementById("side-hidden").style.width = "50%";
    document.getElementById("noScroll").style.position = "fixed";
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