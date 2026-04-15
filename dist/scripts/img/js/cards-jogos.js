let botaoIniciar=document.querySelectorAll(".botao-iniciar button"),cardDoJogo=document.querySelector(".card-principal-jogos"),corpoCardJogo=cardDoJogo.querySelector(".card-corpo-jogo");function iniciarCardJogos(){botaoIniciar.forEach(o=>{o.addEventListener("click",function(){var e=o.closest(".card").querySelector("h6").textContent.trim();cardDoJogo.querySelector("h2").textContent=e,document.body.style.overflow="hidden",cardDoJogo.style.display="block",setTimeout(()=>{cardDoJogo.style.transform="translateY(0)"},400),"crie seu personagem"===e&&(setTimeout(function(){Swal.fire({title:"Você entrou na seção de personagem",text:"Aqui você podera personalizar seu personagem,divirta-se !!",icon:"question",confirmButtonText:"Confirmar",background:"purple",color:"#cdd6f4"})},600),corpoCardJogo.innerHTML=`
                                    <div class='container mt-4 px-3 d-flex flex-column justify-content-center'>
                                        <h6 class='text-center text-light'>Bem vindo você esta montando seu personagem</h6>
                                        <p class='text-center'>Escolha entre diversas peças de roupas para seu personagem</p>
                                        <div class='col-12'>
                                            <div class='card bg-light'>
                                                <div class='card-body d-flex justify-content-center flex-column' id='card-base-personagem'>
                                                    <div class='carrosel-cabeça justify-content-center d-flex'>
                                                        <img src="../../../src/img/personagens/roupas-cabeca/Gemini_Generated_Image_9sxo9c9sxo9c9sxo.png">
                                                    </div>

                                                    <div class='carrosel-torso justify-content-center d-flex'>
                                                        <img src="../../../src/img/personagens/roupas-torso/Gemini_Generated_Image_9sxo9c9sxo9c9sxo(1).png">
                                                    </div>
                                                        
                                                    <div class='carrosel-pernas justify-content-center d-flex'>
                                                        
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>`)})})}cardDoJogo.addEventListener("click",function(e){e.target.classList.contains("btn-close")&&(document.body.style.overflow="auto",cardDoJogo.style.transform="translateY(120%)",setTimeout(()=>{cardDoJogo.style.display="none"},400))});export{iniciarCardJogos};