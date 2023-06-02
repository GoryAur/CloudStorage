document.addEventListener('DOMContentLoaded', () => {
  const downloadBtn = document.getElementById('downloadBtn');
  const progressBar = document.getElementById('progressBar');

  const socket = new WebSocket('ws://localhost:3000');

  socket.addEventListener('open', function (event) {
    console.log('Conexión establecida');
  });

  socket.addEventListener('message', function (event) {
    console.log('Mensaje recibido:', event.data);
  });

  document.getElementById("downloadForm").addEventListener("submit", function (event) {
    event.preventDefault();
    var fileUrl = document.getElementById("fileUrl").value;
    socket.send(fileUrl);
  });

  socket.onmessage = (event) => {
    const progress = JSON.parse(event.data).progress;
    progressBar.style.width = `${progress}%`;
  };

});