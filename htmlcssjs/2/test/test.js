document.addEventListener('DOMContentLoaded', function() {
    const footer = document.querySelector('.footer');
    const menuToggle = document.getElementById('menu-toggle');
    const dropdownMenu = document.getElementById('dropdown-menu');
    
        // Открытие и закрытие выпадающего меню
        menuToggle.addEventListener('click', function() {
        dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
        });

    window.addEventListener('scroll', function() {
        // Если прокрутка на 90% вниз, показать футер
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 80) {
            footer.classList.remove('hidden');
        } else {
            footer.classList.add('hidden');
        }
    });

    // Изначально скрываем футер
    footer.classList.add('hidden');
});
