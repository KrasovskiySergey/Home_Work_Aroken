document.addEventListener('DOMContentLoaded', function () {
    // Элементы корзины
    const basketCounter = document.querySelector('.header__basket-counter');

    // Корзина всегда пустая при загрузке
    let basketItems = [];
    let totalCount = 0;

    // Инициализация счётчика (скрываем если пусто)
    updateBasketCounter();

    // Функция обновления счётчика
    function updateBasketCounter() {
        basketCounter.textContent = totalCount;

        // Показываем или скрываем счётчик
        if (totalCount > 0) {
            basketCounter.style.display = 'flex'; // или 'block' в зависимости от ваших стилей
        } else {
            basketCounter.style.display = 'none';
        }

        // Анимация при изменении
        if (totalCount > 0) {
            basketCounter.classList.add('animate');
            setTimeout(() => basketCounter.classList.remove('animate'), 300);
        }
    }

    // Обработчики для товаров
    document.querySelectorAll('.category__product-card').forEach(card => {
        const quantityEl = card.querySelector('.category__products-quantity-value');
        const addBtn = card.querySelector('.add-to-cart');
        const decreaseBtn = card.querySelector('#decrease');
        const increaseBtn = card.querySelector('#increase');
        let quantity = 1;

        // Уменьшение количества
        decreaseBtn.addEventListener('click', (e) => {
            e.preventDefault();
            if (quantity > 1) {
                quantity--;
                quantityEl.textContent = quantity;
            }
        });

        // Увеличение количества
        increaseBtn.addEventListener('click', (e) => {
            e.preventDefault();
            quantity++;
            quantityEl.textContent = quantity;
        });

        // Добавление в корзину (только для текущей сессии)
        addBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const product = {
                id: card.dataset.id || Date.now(),
                name: card.querySelector('.category__product-title').textContent,
                price: parseInt(card.querySelector('.category__product-price-current').textContent.replace(/\D/g, '')),
                quantity: quantity
            };

            // Обновляем корзину (только в памяти)
            const existingItem = basketItems.find(item => item.id == product.id);
            if (existingItem) {
                existingItem.quantity += quantity;
            } else {
                basketItems.push(product);
            }

            // Обновляем счётчик
            totalCount += quantity;
            updateBasketCounter();

            // Сбрасываем количество
            quantity = 1;
            quantityEl.textContent = quantity;

        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const showMoreBtn = document.getElementById('showMoreBtn');
    const hiddenReviews = document.getElementById('hiddenReviews');
    let isExpanded = false;

    // Изначально скрываем дополнительные отзывы
    hiddenReviews.style.display = 'none';

    showMoreBtn.addEventListener('click', function() {
        isExpanded = !isExpanded;
        
        if (isExpanded) {
            hiddenReviews.style.display = 'block';
            showMoreBtn.innerHTML = 'Скрыть';
            // Добавляем SVG стрелку вверх
            showMoreBtn.innerHTML += `<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.29688 4.278L26.778 24.8641C27.1768 25.2462 27.1902 25.8793 26.8081 26.278C26.426 26.6768 25.7929 26.6902 25.3942 26.3081L3.80809 5.6214V22.5527C3.80809 23.105 3.36038 23.5527 2.80809 23.5527C2.25581 23.5527 1.80809 23.105 1.80809 22.5527V3.278C1.80809 2.72572 2.25581 2.278 2.80809 2.278H22.9637C23.5159 2.278 23.9637 2.72572 23.9637 3.278C23.9637 3.83029 23.5159 4.278 22.9637 4.278H5.29688V4.278Z" fill="#111111"/>
            </svg>`;
        } else {
            hiddenReviews.style.display = 'none';
            showMoreBtn.innerHTML = 'Показать еще';
            // Возвращаем исходную SVG стрелку
            showMoreBtn.innerHTML += `<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M24.7031 25.722L3.22199 5.13588C2.82325 4.75375 2.80978 4.12073 3.19191 3.72199C3.57403 3.32325 4.20706 3.30978 4.6058 3.69191L26.1919 24.3786V7.44733C26.1919 6.89504 26.6396 6.44733 27.1919 6.44733C27.7442 6.44733 28.1919 6.89504 28.1919 7.44733V26.722C28.1919 27.2743 27.7442 27.722 27.1919 27.722H7.03635C6.48406 27.722 6.03635 26.1697 6.03635 25.6174C6.03635 25.0651 6.48406 24.6174 7.03635 24.6174H24.7031V25.722Z" fill="#111111"/>
            </svg>`;
        }

        // Плавная прокрутка к кнопке
        showMoreBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const newsShowMoreBtn = document.getElementById('newsShowMoreBtn');
    const hiddenNews = document.querySelectorAll('.news__content-hidden');
    let newsExpanded = false;

    hiddenNews.forEach(news => {
        news.style.display = 'none';
    });

    newsShowMoreBtn.addEventListener('click', function() {
        newsExpanded = !newsExpanded;
        
        if (newsExpanded) {
            hiddenNews.forEach(news => {
                news.style.display = 'flex';
                news.style.animation = 'fadeIn 0.5s ease-in';
            });
            newsShowMoreBtn.innerHTML = 'Скрыть';
            newsShowMoreBtn.innerHTML += `<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.29688 4.278L26.778 24.8641C27.1768 25.2462 27.1902 25.8793 26.8081 26.278C26.426 26.6768 25.7929 26.6902 25.3942 26.3081L3.80809 5.6214V22.5527C3.80809 23.105 3.36038 23.5527 2.80809 23.5527C2.25581 23.5527 1.80809 23.105 1.80809 22.5527V3.278C1.80809 2.72572 2.25581 2.278 2.80809 2.278H22.9637C23.5159 2.278 23.9637 2.72572 23.9637 3.278C23.9637 3.83029 23.5159 4.278 22.9637 4.278H5.29688V4.278Z" fill="#111111"/>
            </svg>`;
        } else {
            hiddenNews.forEach(news => {
                news.style.display = 'none';
            });
            newsShowMoreBtn.innerHTML = 'Показать еще';
            newsShowMoreBtn.innerHTML += `<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M24.7031 25.722L3.22199 5.13588C2.82325 4.75375 2.80978 4.12073 3.19191 3.72199C3.57403 3.32325 4.20706 3.30978 4.6058 3.69191L26.1919 24.3786V7.44733C26.1919 6.89504 26.6396 6.44733 27.1919 6.44733C27.7442 6.44733 28.1919 6.89504 28.1919 7.44733V26.722C28.1919 27.2743 27.7442 27.722 27.1919 27.722H7.03635C6.48406 27.722 6.03635 27.2743 6.03635 26.722C6.03635 26.1697 6.48406 25.722 7.03635 25.722H24.7031Z" fill="#111111"/>
            </svg>`;
            
            document.querySelector('.main__news').scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start' 
            });
        }
    });
});