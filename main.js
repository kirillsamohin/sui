function calculate() {
  // Вместо реальных вычислений, возвращаем желаемый ответ
  var result = '52';
  document.getElementById('display').value = result;

  // Скрываем кнопку
  var buttonsContainer = document.querySelector('.buttons');
  buttonsContainer.style.display = 'none';

  // Показываем видео
  var videoContainer = document.getElementById('video-container');
  videoContainer.innerHTML = '<video width="560" height="315" controls><source src="52.mp4" type="video/mp4">Ваш браузер не поддерживает тег video.</video>';
  videoContainer.style.display = 'block';
}
