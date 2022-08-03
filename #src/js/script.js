let len = 0
    step = 1;
function myFunction() {
    if (window.innerWidth > 900) {
        len = $('.news-slider__item').length/3;
    } else {
        len = $('.news-slider__item').length/2;
    }
    $('.step').remove();
    $('.slick-prev').after(`<b class="step">${step} / ${len}</b>`);
}

const burger = document.querySelector('.header-burger'),
      labelBurger = document.querySelector('.burger__label'),
      menuBurger = document.querySelector('.menu'),
      body = document.body,
      sublinkMenu = document.querySelectorAll('.arrow'),
      menuLink = document.querySelectorAll('.item__link '),
      cardLink = document.querySelectorAll('.card__link');

cardLink.forEach(element => {
    element.addEventListener('mouseover',(e)=>{
        e.target.classList.add('active');
        e.target.previousElementSibling.classList.add('active');
    })
    element.addEventListener('mouseout',(e)=>{
        e.target.classList.remove('active');
        e.target.previousElementSibling.classList.remove('active');
    })
});


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

// function Visible(target) {
//     // Получаем позиции окна
//     windowPosition = {
//         top: window.scrollY,
//     };
    
//     if ( windowPosition.top > target.height()) 
//     {
//         $('..header::before').css("background-color", "rgba(0,0,0,0.7)");
//     } else {
//         $('..header::before').css("background-color", "");
//     };
// };

// window.addEventListener('scroll', function(e) {
//     if (window.location.href.split('/')[4] != 'flower.html'){
//         Visible ($('.header'));
//     }
// });
$(document).ready(function() {
    // СЛАЙДЕР
    $('.news-slider').slick({
        arrows: true,
        rtl: false,
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive:[
            {
                breakpoint: 900,
                settings:{
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 600,
                settings:{
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    // Подсчет шагов в слайдере
    myFunction();
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
    // $('body').resize(changeSize());
    //Плавный переход по якорной ссылке
    $('a[href^="#"].yakor').click(function(){ 
        let anchor = $(this).attr('href'); 
        $('html, body').animate({          
        scrollTop:  $(anchor).offset().top  
        }, 600);               
    });
});


// page = document.querySelector('body');
// page.addEventListener('resize', (e) => {
//     console.log(e);
// });
// console.log(2);
window.addEventListener("resize", myFunction);


const links = document.querySelectorAll('.tabs__item'),
    // linksNum = document.querySelectorAll('.tabs-descr__links .tabs__item'),
    images = document.querySelectorAll('.tabs-images__photo'),
    tabs = document.querySelectorAll('.tab-block');

let idLink = '';
links.forEach((e) => {
    e.addEventListener('click', (event) => {
        event.preventDefault();
        links.forEach((ev) => {
            ev.classList.remove('active');
        })
        tabs.forEach((ev) => {
            ev.classList.remove('active');
        })
        images.forEach((ev) => {
            ev.classList.remove('active');
        })
        idLink = e.id;
        tabs.forEach((e) => {
            if (e.id == idLink) {
                e.classList.add('active')
            }
        })
        images.forEach((e) => {
            if (e.id == idLink) {
                e.classList.add('active')
            }
        })
        // linksNum.forEach((e) => {
        //     if (e.id == idLink) {
        //         e.classList.add('active')
        //     }
        // })
        e.classList.add('active');
    })
})