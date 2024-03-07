document.addEventListener('DOMContentLoaded', function() {
    const card = document.querySelector('.card');
    const audio = document.getElementById('bgAudio');

    // Проверяем, находится ли страница на мобильном устройстве
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    // Флаг для отслеживания воспроизведения аудио
    let audioPlayed = false;

    // Функция для включения и выключения музыки
    function toggleAudio() {
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
    }

    // На компьютере включаем музыку при открытии открытки
    if (!isMobile) {
        card.addEventListener('mouseenter', function() {
            if (!audioPlayed) {
                toggleAudio();
                audioPlayed = true;
            }
        });
    }

    // Если на мобильном устройстве, включаем музыку по клику на открытке
    if (isMobile) {
        card.addEventListener('touchstart', function() {
            toggleAudio();
        });
    }
});
