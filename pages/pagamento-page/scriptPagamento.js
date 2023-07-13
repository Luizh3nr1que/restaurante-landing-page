const avançarPagamento = document.querySelector('.buttonAvancarPagamento');

avançarPagamento.addEventListener('click', (e) => {
    e.preventDefault();

    const endereco = document.getElementById('endereco').value;
    const casa = document.getElementById('casa').value;
    const entrega = document.querySelector('.entrega');
    const pagamento = document.querySelector('.pagamento');
    const erro = document.querySelector('.erro');
    const barra = document.querySelector('.barraPagamento');

    if (endereco === '' || casa === '') {
        erro.style.display = 'block'
        return;
    } else {
        erro.style.display = 'none'
        entrega.style.display = 'none';
        pagamento.style.display = 'flex';
        barra.style.width = '100%';
    }

});


const voltarDados = document.querySelector(".voltarDados");

voltarDados.addEventListener('click', () => {
    const entrega = document.querySelector('.entrega');
    const pagamento = document.querySelector('.pagamento');
    const barra = document.querySelector('.barraPagamento');

    entrega.style.display = 'block';
    pagamento.style.display = 'none';
    barra.style.width = '45%';

})


const precoSalvo = localStorage.getItem('novoPreco');

const valorCompra = document.querySelector('.valorCompra').textContent = `R$ ${precoSalvo}`;


function selecionarFormaPagamento() {
    const select = document.getElementById("formasPagamento");
    const cartao = document.querySelector(".cartao");
    const pix = document.querySelector(".pix");

    if (select.value === "1") {
        cartao.style.display = "none";
        pix.style.display = "flex";
    } else {
        pix.style.display = "none";
        cartao.style.display = "block";
    }
}