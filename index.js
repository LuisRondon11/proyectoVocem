const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    //obtengo la pagina a mostrar
    const filePath = path.join(__dirname, 'public', 'callMochima.html');
    fs.readFile(filePath, 'utf8', (err, content) => {
      if (err) {
        //error si no funciona el servidor
        res.status(500).send('Error interno del servidor');
      } else {
        //muestra el contenido si todo ok
        res.status(200).send(content);
      }
    });
  });
//Configura Express para servir archivos estáticos desde la carpeta "public"
app.use(express.static('public'));
app.listen(port, () => {
    console.log(`Servidor iniciado en el puerto ${port}`);
});