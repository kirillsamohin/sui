function calculate() {
  
  var result = '52';
  document.getElementById('display').value = result;

  
  var calculator = document.querySelector('.calculator');
  calculator.classList.add('hide');

  var videoContainer = document.getElementById('video-container');
  videoContainer.innerHTML = '<video width="560" height="315" controls><source src="img/52.mp4" type="video/mp4">Ваш браузер не поддерживает тег video.</video>';
  videoContainer.style.display = 'block';
}
