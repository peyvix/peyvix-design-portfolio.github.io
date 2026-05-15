 // Пример проектов (можно легко дополнять)
        const projects = [
            {
                title: "NEXUS Dashboard",
                category: "SaaS • 3D Interface",
                year: "2025",
                image: "../assets/work2.png",
                link: "#"
            },
            {
                title: "LUNAR Studio",
                category: "Брендинг • Веб-дизайн",
                year: "2025",
                image: "../assets/work7.png",
                link: "#"
            },
            {
                title: "Playboi Carti — Goodnight Daylight",
                category: "Album Cover • 3D",
                year: "2025",
                image: "../assets/work3.png",
                link: "#"
            },
            {
                title: "Vesper Finance",
                category: "Fintech • Dashboard",
                year: "2024",
                image: "../assets/work4.png",
                link: "#"
            },
            {
                title: "Aether Cosmetics",
                category: "Брендинг • E-commerce",
                year: "2024",
                image: "../assets/work5.png",
                link: "#"
            },
            {
                title: "Neon Void — Game UI",
                category: "Game Design • UI/UX",
                year: "2024",
                image: "../assets/work6.png",
                link: "#"
            }
        ];

        const grid = document.getElementById('projects-grid');

        projects.forEach(project => {
            const cardHTML = `
                <div class="project-card">
                    <div class="project-image-wrapper">
                        <img src="${project.image}" alt="${project.title}">
                        <div class="project-overlay">
                            <div class="project-info">
                                <div class="project-year">${project.year}</div>
                                <h3 class="project-title">${project.title}</h3>
                                <div class="project-category">${project.category}</div>
                            </div>
                        </div>
                    </div>
                    <div class="project-footer">
                        <a href="${project.link}" class="project-link">Открыть кейс →</a>
                    </div>
                </div>
            `;
            grid.innerHTML += cardHTML;
        });

        // Простая функция для темной темы (если нужно)
        function toggleDarkMode() {
            alert('Переключение темы будет работать в полной версии');
        }