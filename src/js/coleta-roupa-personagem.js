export function coletaDadosCard(){
    const botaoSalvarRoupa = document.querySelector("#botao-salvar-roupa")
    
    botaoSalvarRoupa.addEventListener("click",function(){
        const roupaSelecionada = document.querySelector(".carrosel-roupas img").src
        let alertaDeSalvamento = document.querySelector(".alerta-de-salvamento-de-roupa");

        localStorage.setItem("roupaEscolhida",roupaSelecionada)

        alertaDeSalvamento.style.display = "flex";
        setTimeout(function(){
            alertaDeSalvamento.style.transform = "translateY(0)";
            setTimeout(function(){
                alertaDeSalvamento.style.transform = "translateY(300%)"
                setTimeout(function(){
                    alertaDeSalvamento.style.display = "none";
                },300)
            },800)
        },500)
    })
}