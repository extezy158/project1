const scrollbutton= document.querySelector(".scroll-top");
scrollbutton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })

    
})