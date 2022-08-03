const burger = document.querySelector('.header-burger'),
      labelBurger = document.querySelector('.burger__label'),
      menuBurger = document.querySelector('.menu'),
      body = document.body,
      sublinkMenu = document.querySelectorAll('.arrow'),
      menuLink = document.querySelectorAll('.item__link ');

burger.addEventListener('click', (event) => {
    burger.classList.toggle('active');
    menuBurger.classList.toggle('active');
    if (burger.classList.contains('active')){
        setTimeout(()=>{
            labelBurger.textContent = 'Закрыть';
            labelBurger.style.color = "white";
            labelBurger.style.fontFamily = "Canrara";
            labelBurger.style.fontSize = "16";
            labelBurger.style.marginLeft = "35px";
        }, 200)
    } else {
        labelBurger.textContent = 'Меню';
        labelBurger.style.color = "#0F1693";
        labelBurger.style.fontFamily = "Centurygothic";
        labelBurger.style.fontSize = "16px";
        labelBurger.style.marginLeft = "40px";
    }
   
});

sublinkMenu.forEach((event)=>{
    event.addEventListener('click',(e)=>{
        e.target.classList.toggle('active');
        if (e.target.classList.contains('active')){
            e.target.nextElementSibling.classList.add('active');
            e.target.previousElementSibling.classList.add('active');
        } else {e.target.nextElementSibling.classList.remove('active');
        e.target.previousElementSibling.classList.remove('active');
    }
    })
})

function Visible(target) {
    // Получаем позиции окна
    windowPosition = {
        top: window.scrollY,
    };
    
    if ( windowPosition.top > target.height()) 
    {
        $('..header::before').css("background-color", "rgba(0,0,0,0.7)");
    } else {
        $('..header::before').css("background-color", "");
    };
};

window.addEventListener('scroll', function(e) {
    if (window.location.href.split('/')[4] != 'flower.html'){
        Visible ($('.header'));
    }
});
// function testWebP(callback) {
//     var webP = new Image();
//     webP.onload = webP.onerror = function () {
//         callback(webP.height == 2);
//     };
//     webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
// }
    
// testWebP(function (support) {   
//     if (support == true) {
//         document.querySelector('body').classList.add('webp');
//     } else {
//         document.querySelector('body').classList.add('no-webp');
//     }
// });
$(document).ready(function() {
    // СЛАЙДЕР
    $('.news-slider').slick({
        arrows: true,
        rtl: false,
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 3
    });
    // Подсчет шагов в слайдере
    let len = $('.news-slider__item').length/3,
        step = 1;
    $('.slick-prev').after(`<b class="step">${step} / ${len}</b>`);
    $('.slick-arrow').click(function() {
        $('.step').remove();
        if ($(this).hasClass('slick-next') && step < len) {
            step+=1;
        }
        if ($(this).hasClass('slick-prev') && step > 1) {
            step-=1;
        }
        $('.slick-prev').after(`<b class="step">${step} / ${len}</b>`);
    });
    // переключение табов
});
const links = document.querySelectorAll('.tabs__item'),
    tabs = document.querySelectorAll('.tabs-block');

let idLink = '';
console.log(tabs[0].id);
links.forEach((e) => {
    e.addEventListener('click', (event) => {
        event.preventDefault();
        links.forEach((ev) => {
            ev.classList.remove('active');
        })
        tabs.forEach((ev) => {
            ev.classList.remove('active');
        })
        idLink = e.id;
        tabs.forEach((e) => {
            if (e.id == idLink) {
                e.classList.add('active')
            }
        })
        e.classList.add('active');
    })
})