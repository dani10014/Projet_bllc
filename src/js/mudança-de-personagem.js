
export function iniciarLoopPersonagem() {
    // Tente manter nomes de arquivos simples para evitar erros de URL
    const imagens = [
        "../../../src/img/personagens/Gemini_Generated_Image_9sxo9c9sxo9c9sxo.png", 
        "../../../src/img/personagens/Gemini_Generated_Image_bd3bhxbd3bhxbd3b.png",
        "../../../src/img/personagens/Gemini_Generated_Image_ifgcnmifgcnmifgc.png",
        "../../../src/img/personagens/pixlr-nano-banana-69d508d806ebab391221081b.jpg",
        "../../../src/img/personagens/Gemini_Generated_Image_vaeqghvaeqghvaeq.png",
        "../../../src/img/personagens/Gemini_Generated_Image_t4db74t4db74t4db.png"
    ];  

    const personagemContainer = document.querySelector('.corpo-card-personagem');

    // Verificação de segurança: se o elemento não existir, a função para aqui
    if (!personagemContainer) return;

    setInterval(() => {
        // Gera um índice aleatório
        const indiceImagem = Math.floor(Math.random() * imagens.length);
        
        // Aplica a nova imagem
        personagemContainer.style.backgroundImage = `url('${imagens[indiceImagem]}')`;
        
        // Log para você debugar no console do navegador (F12)
    }, 3000);
}