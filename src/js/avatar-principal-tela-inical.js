export function renderizarAvatarPrincipal(roupa){
    const avatar = document.querySelector(".avatar-tela-inical-direita");

    avatar.style.display = "flex"
    const imagemAvatar = document.createElement("img")
    imagemAvatar.src = roupa;
    avatar.appendChild(imagemAvatar);
} 