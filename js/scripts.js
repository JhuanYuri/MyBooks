const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navegacao = document.querySelector(".barra-navegação")

const filter = document.querySelector(".filter");
const navCate = document.querySelector(".nav-categorias");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    navegacao.classList.toggle('active');
})

filter.addEventListener("click", () => {
    navCate.classList.toggle('ativar');
})

