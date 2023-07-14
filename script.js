const IconNavMobile = document.querySelector('.menu');

IconNavMobile.addEventListener('click', () => {
    const navMobileConteudo = document.querySelector('.navMobile');

    if (!navMobileConteudo.style.display || navMobileConteudo.style.display === 'none') {
        IconNavMobile.setAttribute('name', 'close');
        navMobileConteudo.classList.remove('animaçaoFecharMenu');
        navMobileConteudo.classList.add('animaçaoAbrirMenu');
        navMobileConteudo.style.display = 'block';
    } else {
        IconNavMobile.setAttribute('name', 'menu');
        navMobileConteudo.classList.remove('animaçaoAbrirMenu');
        navMobileConteudo.classList.add('animaçaoFecharMenu');
        setTimeout(() => {
            navMobileConteudo.style.display = 'none';
        }, 200)
    }
})



const img = document.querySelectorAll('img');

img.forEach((img) => {
    img.draggable = false
})


const links = document.querySelectorAll('.links');
const navMobileConteudo = document.querySelector('.navMobile');

links.forEach((link) => {
    link.addEventListener('click', () => {
        IconNavMobile.setAttribute('name', 'menu');
        navMobileConteudo.classList.remove('animaçaoAbrirMenu');
        navMobileConteudo.classList.add('animaçaoFecharMenu');
        setTimeout(() => {
            navMobileConteudo.style.display = 'none';
        }, 200)
    })
})



const indicador = document.getElementById('indicador');

const maxHeight = document.body.scrollHeight - window.innerHeight;

window.addEventListener('scroll', () => {
    const porcentagem = (window.scrollY / maxHeight) * 100;

    indicador.style.width = `${porcentagem}%`;
})

//coraçao card
const coracao = document.querySelectorAll('#coracao');

coracao.forEach((coracao) => {
    coracao.addEventListener('click', () => {
        if (coracao.classList.contains('coracaoPintado')) {
            coracao.classList.remove('coracaoPintado');
        } else {
            coracao.classList.add('coracaoPintado')
        }
    })
})



//carrinho 

const iconCarrinho = document.querySelector('.carrinho');


iconCarrinho.addEventListener('click', () => {
    const carrinhoConteudo = document.querySelector('.carrinhoContainer')

    if (!carrinhoConteudo.style.display || carrinhoConteudo.style.display === 'none') {
        carrinhoConteudo.classList.remove('FecharCarrinho');
        carrinhoConteudo.classList.add('abrirCarrinho');
        carrinhoConteudo.style.display = 'block';
    } else {
        carrinhoConteudo.classList.remove('abrirCarrinho');
        carrinhoConteudo.classList.add('FecharCarrinho');
        setTimeout(() => {
            carrinhoConteudo.style.display = 'none';
        }, 300);
    }
})


//montar hanburguer


//pegando os valores do html e salvando em variaveis
const paoSelect = document.getElementById("pao");
const carneSelect = document.getElementById("carne");
const queijoSelect = document.getElementById("queijo");
const molhoSelect = document.getElementById("molho");
const vegetaisSelect = document.getElementById("vegetais");

const btnAdicionar = document.querySelector('.btnAdicionar');
const totalElement = document.querySelector('.Preco');

//variavel para valor
let total = 0;

//variavel para o numero de pedido começando em 1 pedido
let numero = 1;

const decrementoBotao = document.querySelector('.decrementoBotao');
const incrementoBotao = document.querySelector('.incrementoBotao');
const numeroElemento = document.querySelector('.numero');

function atualizarExibicao() {
    numeroElemento.textContent = numero;
}

function incrementar() {
    numero += 1;
    atualizarExibicao();
}

function decrementar() {
    if (numero > 1) {
        numero -= 1;
        atualizarExibicao();
    }
}

incrementoBotao.addEventListener('click', incrementar);
decrementoBotao.addEventListener('click', decrementar);


function adicionarPedidoCarrinho() {
    const notificacaoContainer = document.querySelector('.notificacaoContainer').style.display = 'flex';

    setTimeout(() => {
        const notificacaoContainer = document.querySelector('.notificacaoContainer').style.display = 'none';
    }, 1600);

    //pegando o pedido selecionado la no começo
    const paoSelecionado = paoSelect.options[paoSelect.selectedIndex];
    const carneSelecionado = carneSelect.options[carneSelect.selectedIndex];
    const queijoSelecionado = queijoSelect.options[queijoSelect.selectedIndex];
    const molhoSelecionado = molhoSelect.options[molhoSelect.selectedIndex];
    const vegetaisSelecionado = vegetaisSelect.options[vegetaisSelect.selectedIndex];

    //mostrando na tela a parte do pedido
    const pedidoPronto = document.querySelector('.pedidoPronto').style.display = 'block';

    //colocando na tela os pedido salvo a cima
    const paoCarrinho = document.querySelector('.pao').innerHTML = paoSelecionado.text;
    const carneCarrinho = document.querySelector('.carne').innerHTML = carneSelecionado.text;
    const queijoCarrinho = document.querySelector('.queijo').innerHTML = queijoSelecionado.text;
    const molhoCarrinho = document.querySelector('.molho').innerHTML = molhoSelecionado.text;
    const vegetaisCarrinho = document.querySelector('.vegetais').innerHTML = vegetaisSelecionado.text;

    //botao pagamento sendo exibido
    const btnPagar = document.querySelector('.btnPagar').style.display = 'block';


    //somando os valores de cada pedido
    total = parseFloat(paoSelecionado.value) +
        parseFloat(carneSelecionado.value) +
        parseFloat(queijoSelecionado.value) +
        parseFloat(molhoSelecionado.value) +
        parseFloat(vegetaisSelecionado.value);

    //fazendo a conta do total dos pedidos vezes o tanto de pedido selecionado
    const novoPreco = total * numero;

    //mostrando na tela o valor
    totalElement.textContent = `R$ ${novoPreco.toFixed(2)}`;

    //salvando preço no localStorange para exibilo em outro lugar futuramente
    localStorage.setItem('novoPreco', novoPreco);
}


function deletarPedidio() {
    const paoCarrinho = document.querySelector('.pao').innerHTML = '';
    const carneCarrinho = document.querySelector('.carne').innerHTML = '';
    const queijoCarrinho = document.querySelector('.queijo').innerHTML = '';
    const molhoCarrinho = document.querySelector('.molho').innerHTML = '';
    const vegetais = document.querySelector('.vegetais').innerHTML = '';

    totalElement.textContent = '';
    const btnPagar = document.querySelector('.btnPagar').style.display = 'none';
    const pedidoPronto = document.querySelector('.pedidoPronto').style.display = 'none';

}
