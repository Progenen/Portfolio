const logoBlick = document.querySelector('.header__logo-name');
const socialMenuMore = document.querySelector('.header__social-mobile-more');
const socialMenu = document.querySelector('.header__social-list');
const hoverable = document.querySelectorAll('.hover-target');
const hoverableItem = document.querySelectorAll('.hover-item');

document.addEventListener('click', (e) => {
    for (let i = 0; i < hoverable.length; i++) {
        if (e.target != hoverableItem[i] && e.target != hoverable[i]) {
            hoverableItem.forEach(element => {
                element.classList.remove('active')
            });
        }
    }
    
})

for (let i = 0; i < hoverable.length; i++) {
    hoverable[i].addEventListener('mouseover', () => {
        hoverableItem[i].classList.add('active');
        hoverable[i].addEventListener('mouseout', (e) => {
                hoverableItem[i].classList.remove('active')
        })
    });
}

if (responsive(500)) {
    setInterval(() => {
        logoBlick.classList.toggle('blick');
    }, 2500)
}

function responsive(width) {
    if (document.body.clientWidth < width) {
        return true;
    }
}

if (responsive(520)) {
    socialMenuMore.addEventListener('click', () => {
        socialMenu.classList.toggle('active');
    })
}