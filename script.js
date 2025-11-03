// Вращение изображения
        const img = document.getElementById('rotatingImage');
        function startRotation() {
            img.classList.add('spin');
        }
        function stopRotation() {
            img.classList.remove('spin');
        }
        startRotation();

       
        // Аудио плеер
      let isPlaying = false;
       const playButton = document.querySelector('.play-button');
       function playAudio() {
    let audio = document.getElementById("voice");
    if (!audio) {
        audio = document.createElement('audio');
        audio.id = 'voice';
        audio.src = 'ваш_аудиофайл.mp3';
        document.body.appendChild(audio);
    }
    
    if (!isPlaying) {
        audio.play();
        isPlaying = true;
        playButton.classList.add('playing');
        // Текст больше не меняем, используем CSS-иконки
    } else {
        audio.pause();
        isPlaying = false;
        playButton.classList.remove('playing');
    }
}

        // Цитаты с эффектом набора
        const quotes = [
            '«Красота — это сила, а макияж — её инструмент.»',
            '«Ты уже прекрасна. Я лишь подчеркиваю это.»',
            '«Макияж — это магия в моих руках.»',
            '«Секрет идеального образа — в деталях.»'
        ];
        let quoteIndex = 0;
        let charIndex = 0;
        const quoteEl = document.getElementById('quoteStick');

        function typeQuote() {
            const current = quotes[quoteIndex];
            quoteEl.textContent = current.substring(0, charIndex++);
            if (charIndex > current.length) {
                setTimeout(() => {
                    quoteIndex = (quoteIndex + 1) % quotes.length;
                    charIndex = 0;
                    typeQuote();
                }, 2500);
            } else {
                setTimeout(typeQuote, 100);
            }
        }
        typeQuote();

        // Подсветка активного пункта навигации
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('nav a');

        function highlightNav() {
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (pageYOffset >= sectionTop - 200) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').substring(1) === current) {
                    link.classList.add('active');
                }
            });
        }

        window.addEventListener('scroll', highlightNav);

        // Обработка формы
        document.getElementById('appointmentForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const email = document.getElementById('email').value.trim();
            const messageDiv = document.getElementById('formMessage');

            // Простая валидация
            if (!name || !phone || !email) {
                messageDiv.className = 'form-message error';
                messageDiv.textContent = 'Пожалуйста, заполните все обязательные поля.';
                return;
            }

            // Здесь можно добавить реальную отправку формы
            console.log('Данные формы:', { name, phone, email });

            // Сообщение об успехе
            messageDiv.className = 'form-message success';
            messageDiv.textContent = 'Данные отправлены, спасибо за связь!';
            
            // Очистить поля после отправки
            this.reset();
            
            // Скрыть сообщение через 5 секунд
            setTimeout(() => {
                messageDiv.style.display = 'none';
            }, 5000);
        });

        // Плавная прокрутка
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });