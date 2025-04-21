(function () {

    // Бургер-----------------------------------

    document.addEventListener('click', burgerInit)

    function burgerInit(e) {

        const burgerIcon = e.target.closest('.burger-icon')
        const burgerNavLink = e.target.closest('.nav__link')

        if (!burgerIcon && !burgerNavLink) return
        if (document.documentElement.clientWidth > 900) return

        if (!document.body.classList.contains('body--open-menu')) {
            document.body.classList.add('body--open-menu')
        } else {
            document.body.classList.remove('body--open-menu')
        }

    }

    // Модалка----------------------------------

    const modal = document.querySelector('.modal')
    const modalButton = document.querySelector('.about__img-button')

    modalButton.addEventListener('click', openModal)
    modal.addEventListener('click', closeModal)

    function openModal(e) {
        e.preventDefault()
        document.body.classList.toggle('body--open-modal')
    }

    function closeModal(e) {
        e.preventDefault()

        const target = e.target
        if (target.closest('.modal__cancel') || target.classList.contains('modal')) {
            document.body.classList.remove('body--open-modal')
        }
    }

    // Табы----------------------

    const tabControls = document.querySelector('.tab-controls')

    tabControls.addEventListener('click', toggleTab)

    function toggleTab(e) {

        const tabControl = e.target.closest('.tab-controls__link')

        if (!tabControl) return
        e.preventDefault()
        if (tabControl.classList.contains('tab-controls__link--active')) return


        const tabContentID = tabControl.getAttribute('href')
        const tabContent = document.querySelector(tabContentID)
        const activeControl = document.querySelector('.tab-controls__link--active')
        const activeContent = document.querySelector('.tab-content--show')

        if (activeControl) {
            activeControl.classList.remove('tab-controls__link--active')
        }
        if (activeContent) {
            activeContent.classList.remove('tab-content--show')
        }

        tabControl.classList.add('tab-controls__link--active')
        tabContent.classList.add('tab-content--show')

    }

    //Аккордеон ------------------------

    const accordionlists = document.querySelectorAll('.accordion-list')

    accordionlists.forEach(el => {

        el.addEventListener('click', (e) => {

            const accordionlist = e.currentTarget
            const accordionOpennedItem = accordionlist.querySelector('.accordion-list__item--opened')
            const accordionOpennedContent = accordionlist.querySelector('.accordion-list__item--opened .accordion-list__content')

            const accordionControl = e.target.closest('.accordion-list__control')
            if (!accordionControl) return
            const accordionItem = accordionControl.parentElement
            const accordionContent = accordionControl.nextElementSibling

            if (accordionOpennedItem && accordionItem != accordionOpennedItem) {
                accordionOpennedItem.classList.remove('accordion-list__item--opened')
                accordionOpennedContent.style.maxHeight = null
            }

            accordionItem.classList.toggle('accordion-list__item--opened')

            if (accordionItem.classList.contains('accordion-list__item--opened')) {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px'
            } else {
                accordionContent.style.maxHeight = null
            }

        })

    })

    // Слайдер-Галерея

    new Swiper('.gallery__slider', {

        slidesPerView: 1.5,
        spaceBetween: 15,

        pagination: {
            el: '.gallery__pagination',
            type: 'fraction',
        },


        navigation: {
            nextEl: '.gallery__next',
            prevEl: '.gallery__prev',
        },

        breakpoints: {
            
            450: {
                spaceBetween: 32,
                slidesPerView: 2,
            },
            601: {
                spaceBetween: 32,
                slidesPerView: 3,
            },
            801: {
                spaceBetween: 32,
                slidesPerView: 4,
            },
            1101: {
                slidesPerView: 4,
                
            }
        }
    });

    // Слайдер-Отзывы

    new Swiper('.testimonials__slider', {

        slidesPerView: 2.05,
        spaceBetween: 0,
        centeredSlides: true,



        navigation: {
            nextEl: '.testimonials__next',
            prevEl: '.testimonials__prev',
        },

        scrollbar: {
            el: '.testimonials__scrollbar',
            draggable: true,
        },


    });

})()