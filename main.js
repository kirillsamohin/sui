function calculate() {
    // Вместо реальных вычислений, возвращаем желаемый ответ
    var result = '52';
    document.getElementById('display').value = result;

    // Получаем элементы калькулятора и видео контейнера
    var calculator = document.getElementById('calculator');
    var videoContainer = document.getElementById('video-container');

    // Скрываем калькулятор
    calculator.style.opacity = '0';
    calculator.style.pointerEvents = 'none';

    // Устанавливаем задержку перед показом видео
    setTimeout(function() {
        // Показываем видео контейнер
        videoContainer.classList.remove('hide');
        // Устанавливаем видео контейнеру полную непрозрачность
        videoContainer.style.opacity = '1';
    }, 500); // Задержка в 0.5 секунды
    video.play();
}
