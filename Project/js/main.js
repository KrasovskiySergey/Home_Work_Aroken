(function () {
    document.addEventListener('click', burgerInit)

    function burgerInit(e) {

        const burgerIcon = e.target.closest('.burger-icon')
        const burgerNavLink = e.target.closest('.nav__link')

        if (!burgerIcon && !burgerNavLink) return
        if(document.documentElement.clientWidth > 900) return

        if (!document.body.classList.contains('body--open-menu')) {
            document.body.classList.add('body--open-menu')
        } else {
            document.body.classList.remove('body--open-menu')
        }

    }

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
})()