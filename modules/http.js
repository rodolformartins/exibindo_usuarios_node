//Importando o HTTP
const http = require('http')

//Definindo uma porta que este servidor vai estar disponível
const port = 8080;

//Criando o servidor em si
const server = http.createServer((req, res) => {
    if (req.url === '/home') {
        res.writeHead(200, { 'Content-type': "text/html" })
        res.end('<h1>Home Page</h1>');
    }

    if (req.url === '/users') {
        const users = [
            {
                name: 'Jhon Doe',
                email: 'john@doe.com'
            },
            {
                name: 'Jane Doe',
                email: 'jane@doe.com'
            }
        ];
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(users));
    }
});

server.listen(port, () => console.log(`Rodando na porta ${port}!`));