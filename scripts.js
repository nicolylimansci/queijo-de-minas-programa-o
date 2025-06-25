document.getElementById("carregarNoticias").addEventListener("click", function() {
    const noticias = [
        "Max Verstappen vence o GP da França!",
        "Lewis Hamilton anuncia renovação com a Mercedes até 2025.",
        "A Ferrari apresenta seu novo carro para 2025!",
        "F1 aprova mudanças no regulamento para a próxima temporada."
    ];

    const listaNoticias = document.getElementById("listaNoticias");
    listaNoticias.innerHTML = ''; // Limpa a lista antes de adicionar novas notícias

    noticias.forEach(noticia => {
        const li = document.createElement("li");
        li.textContent = noticia;
        listaNoticias.appendChild(li);
    });
});
