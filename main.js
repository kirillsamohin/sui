document.addEventListener('DOMContentLoaded', function() {
    const card = document.querySelector('.card');
    const audio = document.getElementById('bgAudio');

    // Функция для включения и выключения музыки
    function toggleAudio() {
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
            // Сбрасываем время воспроизведения на 0, чтобы при следующем включении песня начиналась сначала
            audio.currentTime = 0;
        }
    }

    // Функция для проверки, является ли устройство сенсорным
    function isTouchDevice() {
        return 'ontouchstart' in window || navigator.maxTouchPoints;
    }

    // Включаем музыку при открытии открытки на компьютере
    card.addEventListener('mouseenter', function() {
        if (!isTouchDevice()) {
            toggleAudio();
        }
    });

    // Включаем музыку при касании открытки на мобильных устройствах
    card.addEventListener('touchstart', function() {
        toggleAudio();
    });
});
