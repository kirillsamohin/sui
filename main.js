document.addEventListener('DOMContentLoaded', function() {
    const card = document.querySelector('.card');
    const audio = document.getElementById('bgAudio');

    card.addEventListener('click', function() {
        toggleCard();
    });

    card.addEventListener('touchstart', function() {
        toggleCard();
    });

    function toggleCard() {
        card.classList.toggle('hovered');
        // Переключение воспроизведения музыки при открытии и закрытии открытки
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
    }
});
