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


// //Скролл оффера
// window.addEventListener('scroll', function() {
//     var distanceScrolled = window.scrollTop;
//     var h = document.getElementById('showcase').offsetHeight;
//     var offer = this.document.getElementById('block');
//     while (distanceScrolled < h) {
//         console.log(document.getElementById('block').style.marginTop)
//     }
// })

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