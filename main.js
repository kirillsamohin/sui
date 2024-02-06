function calculate() {
  // Вместо реальных вычислений, возвращаем желаемый ответ
  var result = '52';
  document.getElementById('display').value = result;

  // Скрываем калькулятор и показываем видео
  var calculator = document.querySelector('.calculator');
  calculator.classList.add('hidden');

  var videoContainer = document.getElementById('video-container');
  videoContainer.classList.remove('hidden');
  
  var video = document.getElementById('myVideo');
  video.src = '52.mp4'; // Предполагая, что видео находится в папке img
  video.play(); // Автоматически воспроизводим видео

  // Отслеживаем возможные ошибки при загрузке видео
  video.onerror = function() {
    console.error('Ошибка загрузки видео');
  };
}
