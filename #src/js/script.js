let len = 0
    step = 1;

function myFunction() {
    $('.step').remove();
    if (window.innerWidth > 900) {
        len = $('.news-slider__item').length/3;
    } else {
        len = $('.news-slider__item').length/2;
    }
    $('.slick-prev').after(`<b class="step">${step} / ${len}</b>`);
}

const burger = document.querySelector('.header-burger'),
      labelBurger = document.querySelector('.burger__label'),
      menuBurger = document.querySelector('.menu'),
      body = document.body,
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
        // var matrix = $(offer).css('transform');
        // var matrixPersent = matrix.match(/-?\d+\.?\d*/g);
        offer.style.cssText = `transform: translateY(-${windowPosition.top / 9}%);`;
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
}
function removeStyleLabelMenu(){
    labelBurger.textContent = 'Меню';
    labelBurger.style.color = "#2e3e88";
    labelBurger.style.fontFamily = "Centurygothic";
    labelBurger.style.fontSize = "16px";
    labelBurger.style.paddingLeft = "40px";
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
        arrows: true,
        rtl: false,
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        speed: 1100,
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
    
    myFunction();
    // window.addEventListener("resize", myFunction);

    $(window).resize(myFunction);


    // Подсчет шагов в слайдере
    $('.slick-arrow').click(function() {
        myFunction();
        // console.log('click');
        $('.step').remove();
        $('.step .slick-slide .slick-current .slick-active').remove();
        if ($(this).hasClass('slick-next')) {
            step+=1;
        }
        if ($(this).hasClass('slick-prev')) {
            step-=1;
        }
        $('.slick-prev').after(`<b class="step">${step} / ${len}</b>`);
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