function calculate() {
    // Вместо реальных вычислений, возвращаем желаемый ответ
    var result = '52';
    document.getElementById('display').value = result;

    // Получаем элементы калькулятора и видео контейнера
    var calculator = document.getElementById('calculator');
    var video = document.getElementById('myVideo');

    // Скрываем калькулятор
    calculator.style.opacity = '0';
    calculator.style.pointerEvents = 'none';

    
    video.play();
}
