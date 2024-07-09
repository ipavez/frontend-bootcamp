const http = require('node:http');
const menu = require('./productos.json')

const processReq = (req,res) => {
    //console.log(req.method + req.url + ` -> ${req.body}`);
    switch(req.method){
        case 'GET':{
            res.setHeader('Content-Type', 'application/json; charset=utf-8');
            res.setHeader('Access-Control-Allow-Origin' , '*');
            return res.end(JSON.stringify(menu));
            
        }
        default:
            break;
        
    }
    //res.setHeader('Content-Type', 'text/html; charset=utf-8');
    // if(req.url === '/'){
    //     res.statusCode = 200;
    //     res.end('Index');
    // }
    // else if(req.url === '/login'){
    //     res.statusCode = 200;
    //     res.end('Login')
    // }
    // else{
    //     res.statusCode = 404;
    //     res.end(`Esto es un 404 - ${req.headers['user-agent']}`);
    // }
}

const server = http.createServer(processReq);
const port = process.env.PORT || 0 ;

server.listen(port, () => {
    console.log(`server listening on port http://localhost:${server.address().port} `);
});
