const IconNavMobile = document.querySelector('.menu');
const navMobileConteudo = document.querySelector('.navMobile');

IconNavMobile.addEventListener('click', () => {
    if (navMobileConteudo.style.display === 'none') {
        navMobileConteudo.classList.remove('animaçaoFecharMenu');
        navMobileConteudo.classList.add('animaçaoAbrirMenu');
        navMobileConteudo.style.display = 'block';
    } else {
        navMobileConteudo.classList.remove('animaçaoAbrirMenu');
        navMobileConteudo.classList.add('animaçaoFecharMenu');
        setTimeout(() => {
            navMobileConteudo.style.display = 'none';
        }, 300)
    }
})



const img = document.querySelectorAll('img');

img.forEach((img) => {
    img.draggable = false
})