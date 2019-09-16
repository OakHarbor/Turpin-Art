function toggleNav() {
    document.getElementById("side-menu").style.display = "block";
    document.getElementById("side-menu").style.width = "60%";
    document.getElementById("side-hidden").style.width = "50%";
    document.getElementById("noScroll").style.overflow = "hidden";
    document.getElementById("navbar").style.overflow = "hidden";
    document.getElementById("side-menu").style.overflow = "hidden";
    document.getElementById("btn-close").style.color = "#000000";
    document.getElementById("btn-close").style.background = "white";
    document.getElementById("on-top").style.display = "block";
}

function closeSideMenu() {
    document.getElementById("side-menu").style.width = "0";
    document.getElementById("side-hidden").style.width = "0";
    document.getElementById("noScroll").style.overflow = "scroll";
    document.getElementById("navbar").style.overflow = "scroll";
    document.getElementById("btn-close").style.background = "white";
    document.getElementById("btn-close").style.color = "#CE2026";
    document.getElementById("on-top").style.display = "none";
}