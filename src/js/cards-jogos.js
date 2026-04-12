const botaoIniciar = document.querySelectorAll('.botao-iniciar button');
const cardDoJogo = document.querySelector(".card-principal-jogos");

export function iniciarCardJogos(){

botaoIniciar.forEach(botao => {
    botao.addEventListener('click', function() {

        const card = botao.closest(".card")
        const JogoClicado = card.querySelector('h6').textContent.trim();

        cardDoJogo.querySelector('h2').textContent = JogoClicado;
        cardDoJogo.style.display = "block";
        setTimeout(() => {
            cardDoJogo.style.transform = "translateY(0)";
        }, 400);
    });
});
}
cardDoJogo.addEventListener("click",function(event){
    if(event.target.classList.contains("btn-close")){
        cardDoJogo.style.transform = "translateY(120%)"
            setTimeout(() => {
                cardDoJogo.style.display= "none";
            }, 400);
    }
})