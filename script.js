const opinions = document.querySelector(".opinions");
opinions.addEventListener("wheel", (event) => {
    event.preventDefault();
    opinions.scrollLeft += event.deltaY;
    console.log("Scroll position within .opinions element:", event.deltaY);
});
opinions.addEventListener("mouseleave", () => document.body.style.overflow = 'auto') ;