const http = require('http');

const hostname = '127.0.0.1'
const port = 3000
const url = `http://${hostname}:${port}/`


const server = http.createServer((req, res) => {
    // Retorna 200 (que deu certo)
    res.statusCode = 200;
    // Lê o texto e interpreta como HTML
    res.setHeader('Content-Type', 'text/html')
    res.end('<h1> Bem vindo <br/> Ao meu servidor </h1>')
})

server.listen(port, hostname, ()=>{
    console.log(`Servidor rodando em ${url}`)
})

// Verifica a platforma
const open = (process.platform == 'linux' ? 'xdg-open' :
process.platform == 'win32' ? 'start':'xdg-open');

// Executa no navegador
require('child_process').exec(open  + ' ' + url)