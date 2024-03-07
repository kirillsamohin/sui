document.addEventListener('DOMContentLoaded', function() {
    const card = document.querySelector('.card');
    const audio = document.getElementById('bgAudio');

    function openCard() {
        card.classList.add('hovered');
        // Play "Kiss the Rain" song upon opening the card
        audio.play();
    }

    function closeCard() {
        card.classList.remove('hovered');
        // Pause the song when the card is closed
        audio.pause();
    }

    card.addEventListener('mouseenter', openCard);
    card.addEventListener('mouseleave', closeCard);
    card.addEventListener('click', function(event) {
        // Если пользователь нажал на открытку, и она уже открыта,
        // то закрываем открытку. В противном случае открываем.
        if (card.classList.contains('hovered')) {
            closeCard();
        } else {
            openCard();
        }
        // Предотвращаем стандартное поведение ссылки при клике
        event.preventDefault();
    });
});
