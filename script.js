function toggleMenu() {
    const menu = document.querySelector(".menuLinks");
    const hamburgerIcon = document.querySelector(".hamburgerIcon");
    
    //toggles the open class on the menu
    menu.classList.toggle("open");

    //toggles the open class on the hamburger icon element. 
    hamburgerIcon.classList.toggle("open");  
}