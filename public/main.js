document.addEventListener('DOMContentLoaded', () => {
  const downloadBtn = document.getElementById('downloadBtn');
  const progressBar = document.getElementById('progressBar');

  const socket = new WebSocket('ws://localhost:3000'); // Reemplaza 'localhost:3000' con la URL de tu servidor

  function iniciarDescarga() {
    console.log('Clic en el botón de descarga');
    socket.send("startDownload");
  }


  downloadBtn.addEventListener('click', () => {
    iniciarDescarga()
  });

  socket.onmessage = (event) => {
    const progress = JSON.parse(event.data).progress;
    progressBar.style.width = `${progress}%`;
  };
});
