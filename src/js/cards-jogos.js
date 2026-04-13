const botaoIniciar = document.querySelectorAll('.botao-iniciar button');
const cardDoJogo = document.querySelector(".card-principal-jogos");
const corpoCardJogo = cardDoJogo.querySelector(".card-corpo-jogo");

export function iniciarCardJogos(){

botaoIniciar.forEach(botao => {
    botao.addEventListener('click', function() {

        const card = botao.closest(".card")
        const jogoClicado = card.querySelector('h6').textContent.trim();
        cardDoJogo.querySelector("h2").textContent = jogoClicado;

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

            corpoCardJogo.innerHTML = `
                                    <div class='container mt-4 px-3 d-flex flex-column justify-content-center'>
                                        <h6 class='text-center text-light'>Bem vindo você esta montando seu personagem</h6>
                                        <p class='text-center'>Escolha entre diversas peças de roupas para seu personagem</p>
                                        <div class='col-12'>
                                            <div class='card bg-light'>
                                                <div class="card-body">
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </div>`
        }
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