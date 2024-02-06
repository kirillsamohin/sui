function calculate() {
    // Вместо реальных вычислений, возвращаем желаемый ответ
    var result = '52';
    document.getElementById('display').value = result;

    // Получаем элементы калькулятора и видео контейнера
    var calculator = document.getElementById('calculator');
    var videoContainer = document.getElementById('video-container');

    // Скрываем калькулятор
    calculator.classList.add('hide');

    // Показываем видео контейнер
    videoContainer.classList.remove('hide');
}
