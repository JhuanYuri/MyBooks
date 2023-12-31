const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navegacao = document.querySelector(".barra-navegação")

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    navegacao.classList.toggle('active');
})