import { initializeCarroselCards } from './carrosel-cards.js';
import { iniciarLoopPersonagem } from './mudança-de-personagem.js';
import { iniciarCardJogos } from './cards-jogos.js';
import { renderizarAvatarPrincipal } from './avatar-principal-tela-inical.js';

document.addEventListener('DOMContentLoaded', function() {
    const roupaEscolhida = localStorage.getItem("roupaEscolhida");
    

    if(document.querySelector('.carrosel-cards')) {
        initializeCarroselCards();
    }
    if(document.querySelector('.corpo-card-personagem')) {
        iniciarLoopPersonagem();
    }
    if(document.querySelector('.botao-iniciar button')) {
        iniciarCardJogos();
    }
    if(roupaEscolhida && document.querySelector(".avatar-tela-inical-direita")){
        renderizarAvatarPrincipal(roupaEscolhida);
    }

    const modalElemento = document.querySelector('.modal');
    const avatarElemento = document.querySelector('.avatar');

    if (!modalElemento) return;

    const modalInstancia = new bootstrap.Modal(modalElemento);
    const jaViu = localStorage.getItem('viumodal');

    if (jaViu !== "true") {
        modalInstancia.show();
        avatarElemento.style.display = "block";
    }
    modalElemento.addEventListener("click", function(event) {
        if (event.target.classList.contains("btn-close")) {
            
            document.querySelector(".modal-content").style.transform = "translateY(-150%)";
            avatarElemento.style.transform = "translateY(-300%)";
            localStorage.setItem('viumodal', 'true');

            setTimeout(function() {
                modalInstancia.hide();
            }, 500);
        }
    });
    function randomizarCor(){
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`;
    }
    setInterval(function() {
        const corAleatoria = randomizarCor();

        if(document.querySelector(".texto-principal-bem-vindo span")){
            document.querySelector(".texto-principal-bem-vindo span").style.color = corAleatoria;
        }

    }, 700);
});