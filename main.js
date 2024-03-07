document.addEventListener('DOMContentLoaded', function() {
    const card = document.querySelector('.card');
    const audio = document.getElementById('bgAudio');

    card.addEventListener('click', function() {
        this.classList.toggle('hovered');
        // Переключение воспроизведения музыки при клике на открытку
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
    });
});
