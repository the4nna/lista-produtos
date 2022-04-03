const ul = document.querySelector('.containerListaProdutos ul');
const precoTotal = document.querySelector('.containerPrecoTotal');
const carrinho = document.querySelector('.containerCarrinho ul')
const precoCarrinho = document.getElementById('precoTotal')


const botaoMostrarHortifruti = document.querySelector('.estiloGeralBotoes--filtrarHortifruti');
botaoMostrarHortifruti.addEventListener('click', filtrarPorHortifruti);

const botaoMostrarTodos = document.querySelector('.estiloGeralBotoes--mostrarTodos');
botaoMostrarTodos.addEventListener('click', mostrarTodos);

const botaoBuscar = document.querySelector('.estiloGeralBotoes--botaoBuscaPorNome');
botaoBuscar.addEventListener('click', campoBusca);



//Criar dinamicamente os elementos pelo DOM
function montarListaProdutos(listaProdutos) {

    ul.innerHTML = '';
    listaProdutos.forEach((produto) => {
        const li = document.createElement('li');
        const img = document.createElement('img');
        const h3 = document.createElement('h3');
        const p = document.createElement('p');
        const span = document.createElement('span');
        const ol = document.createElement('ol');
        const li2 = document.createElement('li');
        const li3 = document.createElement('li');
        const li4 = document.createElement('li');
        const li5 = document.createElement('li');
        const button = document.createElement('button');
        

        img.src = produto.img; 
        img.alt = produto.nome; 
        h3.innerText = produto.nome;
        p.innerText = produto.preco;
        span.innerText = produto.secao;
        li2.innerText = produto.componentes[0];
        li3.innerText = produto.componentes[1];
        li4.innerText = produto.componentes[2];
        li5.innerText = produto.componentes[3];
        button.innerText = produto.add;
        button.setAttribute ("data-id", produto.id)
        

        li.appendChild(img);
        li.appendChild(h3);
        li.appendChild(p);
        li.appendChild(span);
        li.appendChild(ol);
        ol.appendChild(li2);
        ol.appendChild(li3);
        ol.appendChild(li4);
        ol.appendChild(li5);
        li.appendChild(button);

        ul.appendChild(li);
    })
}

function filtrarPorHortifruti() {
    const listaHortifruti = produtos.filter((produto) => {
        return produto.secao === 'Hortifruti';
    });
    montarListaProdutos(listaHortifruti);

}

function mostrarTodos() {
    const todosProdutos = produtos.filter((produto) => {
        return produto.secao
    });
    montarListaProdutos(todosProdutos);
}


function campoBusca () {
    const typedText = document.getElementById('texto').value
    const busca = produtos.filter((produto) => {
        return produto.nome.toLowerCase() === typedText.toLowerCase()
    });
    montarListaProdutos(busca)
}

function campoBusca () {
    const typedText = document.getElementById('texto').value
    const busca = produtos.filter((produto) => {
        return produto.secao.toLowerCase() === typedText.toLowerCase()
    });
    montarListaProdutos(busca)
}


//carrinho

let lista = []

ul.addEventListener('click', interceptarEvt) 
function interceptarEvt(evt) {
    const botaoAdd = evt.target
        if (botaoAdd.tagName === "BUTTON") {
        const idProduto = botaoAdd.getAttribute('data-id')
        lista.push(...produtos.filter((produto) => produto.id == idProduto))
        
    }
    montarCarrinho(lista)
}

function montarCarrinho (listaCarrinho) {
    carrinho.innerHTML = '';
    let preco = 0;
    listaCarrinho.forEach((produto) => {
        const li = document.createElement('li')
        const img = document.createElement('img');
        const h3 = document.createElement('h3');
        const p = document.createElement('p');
        const span= document.createElement('span');

        img.src = produto.img; 
        h3.innerText = produto.nome;
        p.innerText = produto.preco;
        span.innerText = produto.secao;

        li.appendChild(img);
        li.appendChild(h3);
        li.appendChild(p);
        li.appendChild(span);

        carrinho.appendChild(li)

        preco += Number(produto.preco)
    })
    precoCarrinho.innerText = preco.toFixed(2)
}


