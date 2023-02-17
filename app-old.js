const http = require('http')

http.createServer((request, response)=>{
    console.log(request);
    response.writeHead(404, {'Content-Type':'text/plain'});
    response.write("404 | Page not found");
    response.end();
})
.listen(8550)

console.log("Escuchando en el puerto 8550");