const IconNavMobile = document.querySelector('.menu');
const navMobileConteudo = document.querySelector('.navMobile');

IconNavMobile.addEventListener('click', () => {
    if (navMobileConteudo.style.display === 'none') {
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