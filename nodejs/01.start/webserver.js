const http = require('http');
const PORT = 3000;
const tObject ={a:"1", b:"2"}
const server = http.createServer((req, res) => {
    if(req.method === 'POST' && req.url === '/home'){
        req.on('data', (data) => {
            console.log(data);
            const stringData = data.toString();
            console.log(stringData);
            Object.assign(tObject, JSON.parse(stringData))
        })
    }else {
        if(req.url === '/home'){
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(tObject))
        }
        else if(req.url === '/about'){
            res.setHeader('Content-Type', 'text/html');
            res.write('<!doctype html>')
            res.write('<html>')
            res.write('<body>')
            res.write('<h1>about page</h1>')
            res.write('</body>')
            res.write('</html>')
        }
        else{
            res.statusCode = 404;
            res.end();
        }
    }
});

server.listen(PORT, () => { console.log(`Server running at http://localhost:${PORT}`); })

// fetch('http://localhost:3000/home', {method: 'POST', body: JSON.stringify({c:"c"})})