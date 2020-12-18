document.addEventListener('DOMContentLoaded', function() {
    let menu = document.querySelector('.burger-menu');
    let menuBody = document.querySelector('.menu__body');

    if (menu != null) {
        menu.addEventListener('click', function() {
        let group = [menu, menuBody];

        group.forEach(element => {
            element.classList.toggle('.active')
        });
        
        body.classList.toggle('.lock');
    });
    }

    class Item {
        constructor(img, name, descr, href1, href2, place, addClass){
            this.img = img;
            this.name = name;
            this.href1 = href1;
            this. href2 = href2;
            this.descr = descr;
            this.place = place
            this.addClass = addClass;
        }

        render() {
            let placing = document.querySelectorAll('.portfolio__row');
            const outPlacing  = document.querySelector('.portfolio .container');
            const placingNum = placing[placing.length - 1].querySelectorAll('.portfolio__item');
            if (placingNum.length > 1) {
                placing = document.createElement('div');
                placing.classList.add('portfolio__row');
                outPlacing.append(placing);
            }
            console.log(placing);
            const element = document.createElement('div');
            element.classList.add('portfolio__item', 'portfolio-item', 'ibg');
            element.innerHTML = `
                <img src=${this.img} class="ibg-image" alt="">
                <div class="portfolio-item__head">
                    <div class="portfolio-item__title">
                        ${this.name}
                    </div>
                </div>
                <div class="portfolio-item__body">
                    <button class="arrow"><img src="images/arrow.png" alt=""></button>
                    <div class="portfolio-item__descr ">
                        ${this.descr}
                    </div>
                    <div class="portfolio-item__ui">
                        <a class="portfolio-item__btn" target=»_blank» href=${this.href1}>Перейти к сайту</a>
                        <a class="portfolio-item__btn portfolio-item__btn_m" target=»_blank» href=${this.href2}>Подробнее</a>
                    </div>
                </div>
            `
            
            if (placingNum.length > 1) {
                placing.append(element);
            } else {
                placing[placing.length - 1].append(element);
            }
        }
    }

    const itemAdd = new Item(
        'images/work3.jpg',
        'PlastOkno',
        'Вёрстка недостающих блоков для PlastOkno23.ru',
        'http://plast-okna23.ru/',
        '',
        '.portfolio__row',
        'class',
    )
    itemAdd.render();

    function ibg(){

        let ibg=document.querySelectorAll(".ibg");
        for (var i = 0; i < ibg.length; i++) {
        if(ibg[i].querySelector('img')){
        ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
        }
        }
        }
        
        ibg();

    let arrowBtn = document.querySelectorAll('.arrow');
    let pBody = document.querySelectorAll('.portfolio-item__body');

    for(let i = 0; i < arrowBtn.length; i++) {
        arrowBtn[i].addEventListener('click', ()=> {
            pBody[i].classList.toggle('active');
            arrowBtn[i].classList.toggle('active');
        });
    }

    
});
