document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-menu li a');
    const currentURL = window.location.pathname.split('/').pop(); 

    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        
        
        if (linkHref === "" || linkHref === "#") return;
        
        
        const normalizedLinkHref = linkHref.split('/').pop();

        
        
        
        if (normalizedLinkHref === currentURL) {
            link.classList.add('active');
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const navItems = document.querySelectorAll('.piece_blog_nav ul li a');

    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault(); 

            
            navItems.forEach(nav => nav.classList.remove('active'));

            
            this.classList.add('active');
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const sliderWrapper = document.querySelector('.slider-wrapper');
    const sliderItems = document.querySelectorAll('.slider-item');
    const dotsContainer = document.querySelector('.slider-dots');

    if (!dotsContainer) {
        return;
    }

    let currentIndex = 0;
    let itemsToShow = getItemsToShow(); // Визначити кількість слайдів для показу
    const totalItems = sliderItems.length;

    // Додаємо кнопки для пагінації
    for (let i = 0; i < Math.ceil(totalItems / itemsToShow); i++) {
        const dot = document.createElement('button');
        dot.addEventListener('click', function() {
            currentIndex = i;
            updateSlider();
        });
        dotsContainer.appendChild(dot);
    }

    const dots = dotsContainer.querySelectorAll('button');

    function updateSlider() {
        const offset = currentIndex * (-100 / itemsToShow); // Вираховуємо зсув для поточної сторінки
        sliderWrapper.style.transform = `translateX(${offset}%)`;

        dots.forEach(dot => dot.classList.remove('active'));
        dots[currentIndex].classList.add('active');
    }

    // Встановлюємо активну кнопку
    if (dots.length > 0) {
        dots[0].classList.add('active');
    }
    updateSlider();

    // Функція для визначення кількості слайдів для показу
    function getItemsToShow() {
        if (window.innerWidth >= 768) { // Для md (можете змінити на свою точку зламування)
            return 3;
        } else if (window.innerWidth >= 576) { // Для sm
            return 2;
        }
        return 1; // За замовчуванням
    }

    // Додати обробник подій на зміну розміру вікна
    window.addEventListener('resize', function() {
        const newItemsToShow = getItemsToShow();
        if (newItemsToShow !== itemsToShow) {
            itemsToShow = newItemsToShow;
            currentIndex = 0; // Скидаємо на першу сторінку
            updateSlider();
        }
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const heartIcons = document.querySelectorAll('.heart-icon');

    heartIcons.forEach(function(heartIcon) {
        heartIcon.addEventListener('click', function() {
            const pathElement = heartIcon.querySelector('path');

            if (pathElement.getAttribute('fill') === 'white') {
                pathElement.setAttribute('fill', 'none');
            } else {
                pathElement.setAttribute('fill', 'white');
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const searchContainer = document.querySelector('.search-container');
    const searchIcon = document.querySelector('.nav-icon-search');

    searchIcon.addEventListener('click', function(e) {
        e.preventDefault(); 
        searchContainer.classList.toggle('active');
    });
});



function toggleFilter(filterId) {
    const filter = document.getElementById(filterId);
    filter.style.display = filter.style.display === 'block' ? 'none' : 'block';
}

function toggleFilter(filterId) {
    const icon = event.currentTarget.querySelector('.icon'); 
    const filterContent = document.getElementById(filterId); 

    
    if (filterContent.style.display === "none" || filterContent.style.display === "") {
        filterContent.style.display = "block"; 
        icon.classList.add('rotate'); 
    } else {
        filterContent.style.display = "none"; 
        icon.classList.remove('rotate'); 
    }
}
function toggleFilter(filterId) {
    const icon = event.currentTarget.querySelector('.icon'); 
    const filterContent = document.getElementById(filterId); 

    
    if (filterContent.style.display === "none" || filterContent.style.display === "") {
        filterContent.style.display = "block"; 
        icon.classList.add('rotate'); 
    } else {
        filterContent.style.display = "none"; 
        icon.classList.remove('rotate'); 
    }
}

const items = document.querySelectorAll('.filter-item');

items.forEach(item => {
    item.addEventListener('click', function() {
        items.forEach(i => i.classList.remove('active'));
        this.classList.add('active');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const sliderItems = document.querySelectorAll('.slider-image-item');
    const dot_imagesContainer = document.querySelector('.dots-image-container');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    let currentIndex = 0;

    // Перевірка, чи існують слайди і контейнер точок
    if (sliderItems.length === 0 || !dot_imagesContainer) {
        console.error('Slider items or dots container not found');
        return; // Виходимо, якщо слайди або контейнер точок не знайдено
    }

    // Створюємо точки відповідно до кількості слайдів
    sliderItems.forEach((item, index) => {
        const dot_image = document.createElement('button');
        dot_image.classList.add('dot-image');
        if (index === currentIndex) {
            dot_image.classList.add('active');
        }
        dot_image.addEventListener('click', function() {
            currentIndex = index;
            updateSlider();
        });
        dot_imagesContainer.appendChild(dot_image);
    });

    // Функція для оновлення слайдів та точок
    function updateSlider() {
        sliderItems.forEach((item, index) => {
            item.classList.remove('active');
            const dot_image = dot_imagesContainer.children[index]; // Отримуємо відповідну точку
            dot_image.classList.remove('active');
            if (index === currentIndex) {
                item.classList.add('active');
                dot_image.classList.add('active');
            }
        });
    }

    // Перевірка наявності кнопок
    if (nextButton) {
        nextButton.addEventListener('click', function() {
            currentIndex = (currentIndex + 1) % sliderItems.length;
            updateSlider();
        });
    } else {
        console.warn('Next button not found');
    }

    if (prevButton) {
        prevButton.addEventListener('click', function() {
            currentIndex = (currentIndex - 1 + sliderItems.length) % sliderItems.length;
            updateSlider();
        });
    } else {
        console.warn('Previous button not found');
    }

    updateSlider(); // Початкова ініціалізація
});

document.addEventListener('DOMContentLoaded', function() {
    const minusBtn = document.querySelector('.minus');
    const plusBtn = document.querySelector('.plus');
    const counterValue = document.querySelector('.counter-value');
    let count = 0;

    // Перевірка наявності кнопок і елемента значення
    if (!minusBtn || !plusBtn || !counterValue) {
        console.error('One or more elements not found: ', { minusBtn, plusBtn, counterValue });
        return; // Виходимо з функції, якщо елементи не знайдені
    }

    minusBtn.addEventListener('click', function() {
        count--;
        counterValue.textContent = count;
    });

    plusBtn.addEventListener('click', function() {
        count++;
        counterValue.textContent = count;
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.comments-track');
    const comments = document.querySelectorAll('.comment');
    const dotsContainer = document.querySelector('.dots');


    if (!dotsContainer) {
        return; // Завершуємо виконання, якщо елемент не знайдено
    }

    let currentSlide = 0;
    let slidesToShow = window.innerWidth <= 768 ? 1 : 2; // Змінюємо кількість слайдів для md екранів
    let totalSlides = Math.ceil(comments.length / slidesToShow);

    // Функція для оновлення слайдеру
    function updateSlider() {
        const offset = -(100 / totalSlides) * currentSlide;
        track.style.transform = `translateX(${offset}%)`;

        // Оновлюємо активні точки
        document.querySelectorAll('.dot').forEach((dot, index) => {
            if (index === currentSlide) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

    // Оновлюємо кількість точок відповідно до кількості слайдів
    function createDots() {
        dotsContainer.innerHTML = ''; // Очищаємо контайнер перед створенням нових точок
        for (let i = 0; i < totalSlides; i++) {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            if (i === 0) dot.classList.add('active');
            dotsContainer.appendChild(dot);

            dot.addEventListener('click', function() {
                currentSlide = i;
                updateSlider();
            });
        }
    }

    // Функція для оновлення слайдів і точок при зміні розміру екрана
    function updateSlidesOnResize() {
        slidesToShow = window.innerWidth <= 992 ? 1 : 2; // Перевірка на розмір екрану
        totalSlides = Math.ceil(comments.length / slidesToShow);
        currentSlide = 0; // Скидаємо на перший слайд
        createDots(); // Перестворюємо точки
        updateSlider(); // Оновлюємо слайдер
    }

    // Додаємо точки при першому завантаженні
    createDots();

    // Оновлюємо слайди при зміні розміру екрану
    window.addEventListener('resize', updateSlidesOnResize);
});



document.querySelectorAll('.accordion-header').forEach(button => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;

        button.classList.toggle('active');

        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
});
document.querySelector('.burger-icon').addEventListener('click', function () {
    const menus = document.querySelectorAll('.nav-menu'); // Усі меню
    const body = document.querySelector('body'); // Вибір тільки одного body
    body.classList.toggle('show'); // Додавання/видалення класу show до body
    menus.forEach(menu => {
        menu.classList.toggle('show'); // Показати/сховати обидва меню
    });
});

// Відкриття/закриття випадаючого списку при натисканні на "Сортування"
document.addEventListener('DOMContentLoaded', function() {
    const sortLabel = document.querySelector('.sort-label');
    console.log(sortLabel); // Додайте цю лінію для перевірки
    if (sortLabel) {
        sortLabel.addEventListener('click', function() {
            const dropdown = document.querySelector('.dropdown');
            dropdown.classList.toggle('active');
        });
    } else {
    }
});


// Оновлення тексту вибору при натисканні на елемент списку
document.querySelectorAll('.filter-item').forEach(function(item) {
    item.addEventListener('click', function() {
        const selectedText = this.textContent;
        document.querySelector('.selected-sort').textContent = selectedText;
        document.querySelector('.dropdown').classList.remove('active');
    });
});

function toggleFilters() {
    const filterSection = document.querySelector('.filter-section');
    
    if (filterSection.style.display === 'block') {
        filterSection.style.display = 'none';
    } else {
        filterSection.style.display = 'block';
    }
}
