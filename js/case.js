document.addEventListener("DOMContentLoaded", () => {
    // 1. Получаем ID из URL (?id=boost-it)
    const urlParams = new URLSearchParams(window.location.search);
    const caseId = urlParams.get('id');

    // 2. Ищем данные проекта
    const currentCase = portfolioData[caseId];

    if (currentCase) {
        // Меняем тайтл вкладки браузера
        document.title = `${currentCase.title} — Portfolio`;

        // 3. Заполняем текстовые блоки по ID
        document.getElementById('case-title').innerText = currentCase.title;
        document.getElementById('case-ratio').innerText = currentCase.ratio;
        document.getElementById('case-software').innerText = currentCase.software;
        document.getElementById('case-client-year').innerText = currentCase.clientYear;
        document.getElementById('case-category').innerText = currentCase.category;
        document.getElementById('case-description').innerText = currentCase.description;

        // 4. Работаем с изображениями в галерее
        const galleryContainer = document.getElementById('case-gallery');
        const mainImg = document.getElementById('case-main-img');

        if (currentCase.images && currentCase.images.length > 0) {
            // Устанавливаем первую картинку в существующий тег img
            mainImg.src = currentCase.images[0];
            mainImg.alt = `${currentCase.title} — Main Preview`;

            // Если в массиве больше одной картинки, рендерим остальные
            for (let i = 1; i < currentCase.images.length; i++) {
                const newImg = document.createElement('img');
                newImg.src = currentCase.images[i];
                newImg.alt = `${currentCase.title} — Detail ${i}`;
                newImg.className = 'full-res-img'; // Наследует твои стили
                
                // Добавляем в конец контейнера галереи
                galleryContainer.appendChild(newImg);
            }
        }
    } else {
        // Обработка ошибки, если ID не найден
        document.querySelector('.case-main').innerHTML = `
            <section class="limiter" style="padding: 8rem 0; text-align: center; margin: 0 auto;">
                <h1 class="heading" style="margin-bottom: 3rem; width: 100%;">Проект не найден</h1>
                <p class="description" style="margin: 0 auto;">
                    Убедитесь, что ссылка верна, или вернитесь на <a href="../projects/projects.html" class="error-link" style="text-decoration: underline;">страницу работ</a>.
                </p>
            </section>
        `;
    }
});