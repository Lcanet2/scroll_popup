// Créer un événement au scroll
const nav =document.querySelector("nav")
let scrollValue = 0;

window.addEventListener('scroll', (e) => {
    if (window.scrollY < scrollValue) {
        nav.style.height = "90px";
        scrollValue = window.scrollY;
    }   else {
        nav.style.height = "45px";
    }
    scrollValue = window.scrollY
})

// Faire apparaitre l'image de la partie improvise

window.addEventListener('scroll', (e) => {
    if (window.scrollY > 99) {
        imgImprovise.style.opacity = "1";
        imgImprovise.style.transform = "translateX(0) ";

    } else {
        imgImprovise.style.opacity = "0";
        imgImprovise.style.transform = "translateX(-200px) ";
    }
});



// Faire apparaitre la popup quand on est en bas du site

window.addEventListener('scroll', (e) => {
    if (window.scrollY > 1000) {
       popup.style.opacity = 1;
       popup.style.transform = "translateX(0px)";
    } else {

    }
});
// Bonus : quand on clicke sur la popup elle disparait pour toujours

