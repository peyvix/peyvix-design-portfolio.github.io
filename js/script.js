// Custom Cursor (плавный)
const cursor = document.getElementById('custom-cursor');
const navbar = document.querySelector('header');
let targetX = 0, targetY = 0;
let currX = 0, currY = 0;
let isCursorVisible = true;

document.addEventListener('mousemove', (e) => {
    targetX = e.clientX;
    targetY = e.clientY;
});

// Mouse out page optimisation //

    // Mouse check - in
document.addEventListener('mouseleave', () => {
    isCursorVisible = false;
    cursor.style.opacity = '0';
    cursor.style.transition = 'var(--animation)'; 
    setTimeout(() => {
        if (!isCursorVisible) cursor.style.display = 'none';
    }, 300);
});

    // Mouse check - out
document.addEventListener('mouseenter', () => {
    isCursorVisible = true;
    cursor.style.display = 'block';
    setTimeout(() => {
        cursor.style.opacity = '1';
    }, 10);
    cursor.style.transition = 'none'; 
});

// Cursor
function animateCursor() {

    if (isCursorVisible) {
        currX += (targetX - currX) * 0.20;
        currY += (targetY - currY) * 0.20;
        
        cursor.style.left = currX + 'px';
        cursor.style.top = currY + 'px';
    }
    
    requestAnimationFrame(animateCursor);
}
animateCursor();

// Remove click class when page loading
document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.getElementById('custom-cursor');
    
    if (cursor) {
        cursor.classList.remove('cursor-on-header');
    }
});

// Cursor click
document.addEventListener('click', (e) => {
    cursor.classList.add('cursor-on-header');
    setTimeout(() => {
        cursor.classList.remove('cursor-on-header');
    }, 100); 
   
})

// // Header cursor glow trail
// if (navbar) {
//     navbar.addEventListener('mouseenter', () => {
//         cursor.style.transition = 'scale 0.4s ease, width 0.4s ease, height 0.4s ease, background-color 0.3s ease, box-shadow 0.3s ease, opacity 0.3s ease';
//         cursor.style.transitionDelay = '.3s';
//         cursor.classList.add('cursor-on-header');
//     });

//     navbar.addEventListener('mouseleave', () => {
//         cursor.style.transition = 'scale 0.2s ease, width 0.2s ease, height 0.2s ease, background-color 0.2s ease, box-shadow 0.2s ease, opacity 0.2s ease';
//         cursor.style.transitionDelay = '0s';
//         cursor.classList.remove('cursor-on-header');
//     });
// }

// Elements class tracking for cursor state
document.addEventListener('mouseover', (e) => {

    // Cursor pointer I-beam state
    if (e.target.closest('p, h1, h2, h3, input, textarea')) {
        cursor.classList.add('cursor-text');
    } else {
        cursor.classList.remove('cursor-text');
    }

    // Cursor pointer Text state
    if (e.target.closest('a, button, .expand-box, .btn-primary')) {
        cursor.classList.add('cursor-pointer');
    } else {
        cursor.classList.remove('cursor-pointer');
    }
});

// FORM SUBMIT

const form = document.getElementById('contact-form');
// form.addEventListener('submit', function(e) {
//     e.preventDefault();
//     // const formData = new FormData(this);
//     // const formValues = Object.fromEntries(formData.entries());
//     console.log('Данные формы:', formValues);
//     alert('Спасибо! Я свяжусь с вами в ближайшее время ✨');
//     this.reset();
// });

const TELEGRAM_TOKEN = '8636551488:AAFrwOlhWson8Sm7PQUD_Uv9pK0aj7-Mn7k';
const TELEGRAM_CHAT_ID = '1884129591';

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(this);
    const formValues = Object.fromEntries(formData.entries());
    console.log('Собранные данные:', formValues); 

    // TG Bot Message
    let message = `<b>🔔 Новая заявка с сайта!</b>\n\n`;
    message += `👤 <b>Name:</b> ${formValues.Name || 'Не указано'}\n`;
    message += `📧 <b>Email:</b> ${formValues.Email || 'Не указано'}\n`;
    if (formValues.Company) {
        message += `🏢 <b>Company:</b> ${formValues.Company}\n`;
    }
    message += `<b>ㅤㅤㅤㅤ</b>\n`;
    message += `ℹ️ <b>Info:</b> ${formValues.Information || 'Не указано'}\n`;
    

    // Request to TG Bot
    fetch(`https://api.telegram.org/bot8636551488:AAFrwOlhWson8Sm7PQUD_Uv9pK0aj7-Mn7k/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            chat_id: 1884129591,
            parse_mode: 'HTML',
            text: message
        })
    })
    .then(response => {
        if (response.ok) {
            alert('Сообщение успешно отправлено! ✨');
            this.reset();
            document.querySelector('.form-company-wrapper')?.classList.remove('active');
        } else {
            alert('Ошибка сервера при отправке. Попробуйте позже.');
        }
    })
    .catch(error => {
        console.error('Ошибка сети:', error);
        alert('Не удалось отправить сообщение. Проверьте интернет-соединение.');
    });
});

// Form Company
const openBtn = document.querySelector('.company-placeholder-btn');
const closeBtn = document.querySelector('.company-close-btn');
const wrapper = document.querySelector('.form-company-wrapper');
const companyInput = document.querySelector('input[name="Company"]');
openBtn.addEventListener('click', () => {
    wrapper.classList.add('active');
    setTimeout(() => companyInput.focus(), 100); // Мягкий фокус после анимации
});
closeBtn.addEventListener('click', () => {
    wrapper.classList.remove('active');
    companyInput.value = ''; // Очищаем данные для FormData
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth'});
    });
});

// Header optimistaion 
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    document.querySelector('.header').style.backdropFilter = 'none';
    document.querySelector('.header').style.background = '#09090b';
}