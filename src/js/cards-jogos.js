import {coletaDadosCard} from "./coleta-roupa-personagem.js";


const botaoIniciar = document.querySelectorAll('.botao-iniciar button');
const cardDoJogo = document.querySelector(".card-principal-jogos");
const corpoCardJogo = cardDoJogo.querySelector(".card-corpo-jogo");

export function iniciarCardJogos(){

botaoIniciar.forEach(botao => {
    botao.addEventListener('click', function() {

        const card = botao.closest(".card")
        const jogoClicado = card.querySelector('h6').textContent.trim();

        cardDoJogo.querySelector("h2").textContent = jogoClicado;

        document.body.style.overflow = "hidden"
        cardDoJogo.style.display = "block";
        setTimeout(() => {
            cardDoJogo.style.transform = "translateY(0)";
        }, 400);
        
        if(jogoClicado === "crie seu personagem"){
            setTimeout(function(){
                Swal.fire({
                title: 'Você entrou na seção de personagem',
                text: 'Aqui você podera personalizar seu personagem,divirta-se !!',
                icon: 'question',
                confirmButtonText: 'Confirmar',
                background: 'purple', 
                color: '#cdd6f4' 
            });
            },600)
        $("carrosel-roupas").slick('setPosition');
            corpoCardJogo.innerHTML = `
                                    <div class='container mt-4 px-3 d-flex flex-column justify-content-center'>
                                        <h6 class='text-center text-light'>Bem vindo você esta montando seu personagem</h6>
                                        <p class='text-center text-light'>Escolha entre diversas peças de roupas para seu personagem</p>
                                        <div class='col-12'>
                                            <div class='card bg-light'>
                                                <div class='card-body d-flex justify-content-center flex-column' id='card-base-personagem'>
                                                    <div class='carrosel-roupas justify-content-center d-flex'>
                                                        <img src="../../../src/img/personagens/Gemini_Generated_Image_9sxo9c9sxo9c9sxo.png">
                                                        <img src="../../../src/img/personagens/Gemini_Generated_Image_bd3bhxbd3bhxbd3b.png">
                                                    </div>

                                                </div>
                                            </div>
                                            <button class='btn btn-primary w-100 mt-3' id='botao-salvar-roupa'>Salvar roupas</button>
                                        </div>
                                    </div>`
            initializeCarroselRoupas()
            coletaDadosCard()
            
        }
    });
});
}

function initializeCarroselRoupas() {
    const carrosel = document.querySelector('.carrosel-roupas');

    if (!carrosel) return;

    $(carrosel).slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
    });
}

cardDoJogo.addEventListener("click",function(event){
    if(event.target.classList.contains("btn-close")){
        document.body.style.overflow = "auto"
        cardDoJogo.style.transform = "translateY(120%)"
            setTimeout(() => {
                cardDoJogo.style.display= "none";
            }, 400);
    }
})