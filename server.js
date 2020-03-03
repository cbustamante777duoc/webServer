const express = require('express');
const app = express();

app.get('/', (req, res) => {
    // res.send('hola mundo 20');
    let salida = {
        nombre: 'cristian',
        novia: 'lalisa manoban',
        url: req.url
    };

    res.send(salida);

});
/*
app.get('/lalisa', (req, res) => {
    res.send('hola url /lalisa');
    
});
*/

app.listen(3000, () =>{
    console.log("escuchando respuesta desde el puerto 3000");
})