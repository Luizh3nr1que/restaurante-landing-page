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

const paoSelect = document.getElementById("pao");
const carneSelect = document.getElementById("carne");
const queijoSelect = document.getElementById("queijo");
const molhoSelect = document.getElementById("molho");
const vegetaisSelect = document.getElementById("vegetais");

const btnAdicionar = document.querySelector('.btnAdicionar');
const totalElement = document.querySelector('.Preco');
let total = 0;


btnAdicionar.addEventListener('click', (e) => {
    const notificacaoContainer = document.querySelector('.notificacaoContainer').style.display = 'flex';

    setTimeout(() => {
        const notificacaoContainer = document.querySelector('.notificacaoContainer').style.display = 'none';
    }, 1600)

    const paoSelecionado = paoSelect.options[paoSelect.selectedIndex];
    const carneSelecionado = carneSelect.options[carneSelect.selectedIndex];
    const queijoSelecionado = queijoSelect.options[queijoSelect.selectedIndex];
    const molhoSelecionado = molhoSelect.options[molhoSelect.selectedIndex];
    const vegetaisSelecionado = vegetaisSelect.options[vegetaisSelect.selectedIndex];

    const pedidoPronto = document.querySelector('.pedidoPronto').style.display = 'block';

    const paoCarrinho = document.querySelector('.pao').innerHTML = paoSelecionado.text;
    const carneCarrinho = document.querySelector('.carne').innerHTML = carneSelecionado.text;
    const queijoCarrinho = document.querySelector('.queijo').innerHTML = queijoSelecionado.text;
    const molhoCarrinho = document.querySelector('.molho').innerHTML = molhoSelecionado.text;
    const vegetaisCarrinho = document.querySelector('.vegetais').innerHTML = vegetaisSelecionado.text;

    const btnPagar = document.querySelector('.btnPagar').style.display = 'block';

    total = parseFloat(paoSelecionado.value) +
        parseFloat(carneSelecionado.value) +
        parseFloat(queijoSelecionado.value) +
        parseFloat(molhoSelecionado.value) +
        parseFloat(vegetaisSelecionado.value);

    totalElement.textContent = `R$ ${total.toFixed(2)}`;
});


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