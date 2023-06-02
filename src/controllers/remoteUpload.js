const https = require('https');
const fs = require('fs');
const WebSocket = require('ws');
const path = require('path');
const url = require('url');
require('dotenv').config();

const wss = new WebSocket.Server({ port: 3000 });

wss.on('connection', (ws) => {
  console.log('Cliente conectado');
  ws.on('message', (message) => {
    const decodedMessage = message.toString('utf8');
    console.log('Mensaje recibido:', decodedMessage);
    if (decodedMessage) {
      if (ws.readyState === WebSocket.OPEN) {
        try {
          const fileUrl = decodedMessage; // Reemplaza con la URL del archivo que deseas descargar
          const parsedUrl = url.parse(fileUrl);
          const filename = path.basename(parsedUrl.pathname);
          const fileExtension = path.extname(filename);
          const fileNameWithoutExtension = path.basename(filename, fileExtension);
          const destinationPath = path.join(`${__dirname}../../../videos/${filename}`); // Reemplaza con la ruta y nombre de archivo de destino

          const file = fs.createWriteStream(destinationPath);

          https.get(fileUrl, (response) => {
            response.pipe(file);

            let totalSize = parseInt(response.headers['content-length'], 10);
            let downloadedSize = 0;

            response.on('data', (chunk) => {
              downloadedSize += chunk.length;
              const progress = Math.round((downloadedSize / totalSize) * 100);

              // Envia la actualización de progreso solo si el WebSocket está abierto
              if (ws.readyState === WebSocket.OPEN) {
                ws.send(JSON.stringify({ progress }));
              }
            });

            file.on('finish', () => {
              file.close();
              console.log('Descarga completada.');
            });
          }).on('error', (err) => {
            console.error('Error al descargar el archivo:', err.message);
          });
        } catch (e) {
          console.log(e)
        }
      }
    }
  });
});

module.exports = {
  wss
}