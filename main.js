function calculate() {
  // Вместо реальных вычислений, возвращаем желаемый ответ
  var result = '52';
  document.getElementById('display').value = result;

  // Получаем элементы калькулятора и видео контейнера
  var calculator = document.getElementById('calculator');
  var videoContainer = document.getElementById('video-container');

  // Скрываем калькулятор с плавной анимацией
  calculator.classList.add('hide');
  // Показываем видео контейнер с плавной анимацией через короткую задержку
  setTimeout(function() {
    videoContainer.classList.remove('hide');
  }, 500); // 500 миллисекунд (0.5 секунды) - это длительность анимации
}
