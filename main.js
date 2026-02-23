// 2.1 Seletores (Pegando os elementos do HTML)
const formulario = document.querySelector('#meu-formulario');
const tituloInput = document.querySelector('#input-titulo');
const conteudoInput = document.querySelector('#input-conteudo');

const tituloRenderizar = document.querySelector('#renderizador-titulo');
const conteudoRenderizar = document.querySelector('#renderizador-conteudo');

// 2.2 Adicionando o evento de Submit
formulario.addEventListener('submit', (e) => {
    // 2.3 Prevenir comportamento padrão (não recarregar a página)
    e.preventDefault();

    // 2.4 Criando o objeto data exatamente como pedido
    const data = {
        title: tituloInput.value,
        body: conteudoInput.value,
        userId: 1
    };

    // Fazendo a requisição FETCH
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then(dadosRetornados => {
        // 2.5 A "Mágica" da renderização
        tituloRenderizar.innerHTML = dadosRetornados.title;
        conteudoRenderizar.innerHTML = dadosRetornados.body;
        
        // Limpa o formulário para o próximo post
        formulario.reset();
    })
    .catch(erro => console.error('Erro ao postar:', erro));
});