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

    // Включаем музыку при клике на открытку на компьютере
    card.addEventListener('click', function() {
        toggleAudio();
    });

    // Включаем музыку при касании открытки на мобильных устройствах
    card.addEventListener('touchstart', function() {
        toggleAudio();
    });
});
