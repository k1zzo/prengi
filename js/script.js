$(document).ready(function(){
    $('.solutions__slider').slick({
        speed: 1200,
        /* adaptiveHeight: true, */
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/prev.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/next.png"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: true,
                    arrows: false,
                }
            }
        ]
    });

    $('ul.solutions__tabs').on('click', 'li:not(.solutions__tab_active)', function() {
        $(this)
          .addClass('solutions__tab_active').siblings().removeClass('solutions__tab_active')
          .closest('div.container').find('div.solutions__content').removeClass('solutions__content_active').eq($(this).index()).addClass('solutions__content_active');
    });

    $('[data-modal=consultation]').on('click', function() {
        $('.overlay, #consultation').fadeIn('slow');
    })
    $('.modal__close').on('click', function() {
        $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
    });
    
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu_item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        })
    });

    $('input[name=phone]').mask("+7 (999) 999-99-99");
});