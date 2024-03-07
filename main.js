document.addEventListener('DOMContentLoaded', function() {
    const card = document.querySelector('.card');
    const audio = document.getElementById('bgAudio');

    card.addEventListener('mouseenter', function() {
        this.classList.add('hovered');
        // Если песня не воспроизводится, запускаем её
        if (audio.paused) {
            audio.play();
        }
    });

    card.addEventListener('mouseleave', function() {
        this.classList.remove('hovered');
        // При закрытии открытки останавливаем песню
        audio.pause();
    });
});
