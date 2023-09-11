document.getElementById('startButton').addEventListener('click', function() {
  alert('¡El juego ha comenzado!');
  // Aquí puedes agregar más lógica para iniciar el juego
});

document.getElementById('exitButton').addEventListener('click', function() {
  if (confirm('¿Estás seguro de que quieres salir?')) {
      window.close();
  }
});