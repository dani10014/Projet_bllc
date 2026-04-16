// avatar-principal-tela-inical.js
export function renderizarAvatarPrincipal(roupa) {
    const container = document.querySelector(".avatar-tela-inical-direita");
    if (!container) return;

    // Procura se já existe uma imagem lá dentro
    let img = container.querySelector("img");

    if (!img) {
        // Se não existir, cria a primeira e única vez
        img = document.createElement("img");
        container.appendChild(img);
    }

    // Só atualiza o src se for diferente do atual (evita o "piscar" da imagem)
    if (img.src !== roupa) {
        img.src = roupa;
        console.log("Visual do avatar atualizado para:", roupa);
    }

    container.style.display = "flex";
}

