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

    // Показываем видео контейнер с задержкой и анимацией
    setTimeout(function() {
        videoContainer.classList.remove('hide');
        videoContainer.style.opacity = '1';
    }, 1000); // Задержка в 1 секунду перед показом видео
}
