let len = 0
    step = 1;

function myFunction() {
    $('.step').remove();
    if (window.innerWidth > 900) {
        len = $('.news-slider__item').length/3;
    } else {
        len = $('.news-slider__item').length/2;
    }
    $('.slick-prev').after(`<div class="step">${step} / ${len}</div>`);
}

let timerId = setTimeout(() => {
    console.log('a');
    // document.location.reload(true);
    // console.log('a');
    }, 10);
// alert(timerId); // идентификатор таймера
clearTimeout(timerId);

const activeSub = document.querySelector('.sub-active');
function addActiveSubMobile (){
    if (window.outerWidth < 426){
        activeSub.nextElementSibling.nextElementSibling.classList.add('active');
        activeSub.nextElementSibling.classList.add('active')
        activeSub.classList.add('active');
    }
}
addActiveSubMobile();

const burger = document.querySelector('.header-burger'),
      labelBurger = document.querySelector('.burger__label'),
      menuBurger = document.querySelector('.menu'),
      body = document.body,
      subMenu = document.querySelectorAll('.sub'),
      die = document.querySelector('.die'),
      sublinkMenu = document.querySelectorAll('.arrow'),
      menuLink = document.querySelectorAll('.item__link '),
      cardLink = document.querySelectorAll('.card__link'),
      linkMore = document.querySelectorAll('.row-technologies__link-more'),
      offer = document.querySelector('.showcase__container'),
      directions = document.querySelector('.directions');

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

function Visible(target) {
    // Получаем позиции окна
    windowPosition = {
        top: window.scrollY,
    };
    
    if ( windowPosition.top > target.height()) 
    {
        $('.border').addClass('active');
        $('.header').addClass('active');
        $('.burger').addClass('scroll');
        if (window.outerWidth > 425){offer.style.cssText = `transform: translateY(-${windowPosition.top / 9}%);`;}
    } else {
        $('.border').removeClass('active');
        $('.header').removeClass('active');
        $('.burger').removeClass('scroll');
        offer.style.cssText = `transform: translateY('')`;
    };
};

window.addEventListener('scroll', function(e) {
    Visible ($('.border'));
});

burger.addEventListener('click', (event) => {
    burger.classList.toggle('active');
    menuBurger.classList.toggle('active');
    body.classList.toggle('lock');
    die.classList.toggle('active');
    if (burger.classList.contains('active')){
        setTimeout(()=>{
            addStyleLabelMenu()
        }, 200)
    } else {
        removeStyleLabelMenu()
    }
});

function addStyleLabelMenu(){
    labelBurger.textContent = 'Закрыть';
    labelBurger.style.color = "white";
    labelBurger.style.fontFamily = "Canrara";
    labelBurger.style.fontSize = "16px";
    labelBurger.style.paddingLeft = "35px";
    if (window.outerWidth >= 2560){
        labelBurger.textContent = 'Закрыть';
        labelBurger.style.color = "white";
        labelBurger.style.fontFamily = "Canrara";
        labelBurger.style.fontSize = "32px";
        labelBurger.style.paddingLeft = "90px";
    }
    if (window.outerWidth >= 3840){
        labelBurger.textContent = 'Закрыть';
        labelBurger.style.color = "white";
        labelBurger.style.fontFamily = "Canrara";
        labelBurger.style.fontSize = "52px";
        labelBurger.style.paddingLeft = "150px";
    }
}
function removeStyleLabelMenu(){
    labelBurger.textContent = 'Меню';
    labelBurger.style.color = "#2e3e88";
    labelBurger.style.fontFamily = "Centurygothic";
    labelBurger.style.fontSize = "16px";
    labelBurger.style.paddingLeft = "40px";
    if (window.outerWidth >= 2560){
        labelBurger.textContent = 'Меню';
        labelBurger.style.color = "#2e3e88";
        labelBurger.style.fontFamily = "Centurygothic";
        labelBurger.style.fontSize = "32px";
        labelBurger.style.paddingLeft = "90px";
    }
    if (window.outerWidth >= 3840){
        labelBurger.textContent = 'Меню';
        labelBurger.style.color = "#2e3e88";
        labelBurger.style.fontFamily = "Centurygothic";
        labelBurger.style.fontSize = "52px";
        labelBurger.style.paddingLeft = "150px";
    }
}
die.addEventListener('click',(i)=> {
    die.classList.remove('active');
    burger.classList.remove('active');
    menuBurger.classList.remove('active');
    body.classList.remove('lock');
    removeStyleLabelMenu();
})
$(document).keydown(function(e) {
    if (e.code === 'Escape') {
        die.classList.remove('active');
        burger.classList.remove('active');
        menuBurger.classList.remove('active');
        body.classList.remove('lock');
        removeStyleLabelMenu();
    }
})
if (window.outerWidth >= 768){
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
}
if (window.outerWidth < 768){
    subMenu.forEach((event)=>{
        event.addEventListener('click',(e)=>{
            e.preventDefault();
            e.target.classList.toggle('active');
            if (e.target.classList.contains('active')){
                var arrow = e.target.nextElementSibling;
                arrow.classList.add('active');
                arrow.nextElementSibling.classList.add('active');
            } else {
                var arrow = e.target.nextElementSibling;
                arrow.nextElementSibling.classList.remove('active');
                arrow.classList.remove('active');
            }
        })
    })
}
linkMore.forEach((event)=>{
    event.addEventListener('mouseover',(e)=>{
        e.target.classList.add('active');
        if (e.target.classList.contains('active')){
            e.target.parentNode.classList.add('active');
        }
    })
    event.addEventListener('mouseout',(e)=>{
        e.target.classList.remove('active');
        e.target.parentNode.classList.remove('active');
    })
})


$(document).ready(function() {
    // СЛАЙДЕР
    $('.news-slider').slick({
        draggable: false,
        swipe: false,
        arrows: true,
        rtl: false,
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        speed: 1100,
        appendArrows: $('.arrows'),
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
                    swipe: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    speed: 700
                }
            }
        ]
    });
    
    myFunction();
    $(window).resize(myFunction);

    // Подсчет шагов в слайдере
    $('.slick-arrow').click(function() {
        myFunction();
        $('.step').remove();
        $('.step .slick-slide .slick-current .slick-active').remove();
        if ($(this).hasClass('slick-next') && (step < len)) {
            step+=1;
        }
        if ($(this).hasClass('slick-prev') && (step > 1)) {
            step-=1;
        }
        $('.slick-prev').after(`<div class="step">${step} / ${len}</div>`);
    });

    //Плавный переход по якорной ссылке
    $('a[href^="#"].yakor').click(function(){ 
        let anchor = $(this).attr('href'); 
        $('html, body').animate({          
        scrollTop:  $(anchor).offset().top  
        }, 600);               
    });
});


const links = document.querySelectorAll('.tabs__item'),
    tabs = document.querySelectorAll('.directions-tabs__body-row');

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
        idLink = e.id;
        tabs.forEach((e) => {
            if (e.id == idLink) {
                e.classList.add('active')
            }
        })
        e.classList.add('active');
    })
})

