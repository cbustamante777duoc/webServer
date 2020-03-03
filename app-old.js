
const http = require('http');

http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'application/json'});

    let salida = {
        nombre:'cristian',
        novia:'lalisa manoban',
        url : req.url
    }

    res.write( JSON.stringify(salida));
    res.end();
})
//puerto
.listen(8080);
console.log('haciendo el uso del puerto 8080');