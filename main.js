const hamburger = document.querySelector(".open");
const mobileNav = document.querySelector(".mobile-nav");
const closeBtn = document.querySelector(".close");
hamburger.addEventListener("click", function(){
    mobileNav.style.display = "block";
    closeBtn.style.display = "block";
    this.style.display = "none";
});


closeBtn.addEventListener("click", function(){
    mobileNav.style.display = "none";
    hamburger.style.display = "block";
    this.style.display = "none";
});
