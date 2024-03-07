document.addEventListener('DOMContentLoaded', function() {
    const card = document.querySelector('.card');
    const audio = document.getElementById('bgAudio');

    // Функция для включения и выключения музыки
    function toggleAudio() {
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
    }

    // Включаем музыку при открытии открытки
    card.addEventListener('mouseenter', function() {
        toggleAudio();
    });

    // Если на мобильном устройстве, переключаем музыку при касании открытки
    if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
        card.addEventListener('touchstart', function() {
            toggleAudio();
        });
    }
});
