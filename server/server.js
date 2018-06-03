const Koa = require('koa');
const apiRouter = require('./routers/api');
const ws = require('ws');

const WebSocketServer = ws.Server;
const app = new Koa();

//app.use(apiRouter.routes()).use(apiRouter.allowedMethods());

const HOST = '0.0.0.0';
const PORT = 3333;

let server = app.listen(PORT, HOST, () => {
    console.log(`server is listening on ${HOST}:${PORT}`);
});

let wss = new WebSocketServer({
    server: server
});

wss.broadcast = (data) => {
    wss.clients.forEach((client) => {
        client.send(data);
    });
}

wss.on('connection', (ws) => {
    ws.on('message', (message) => {
        console.log("message: ", message);
        if (message && message.trim()) {
            let msg = createMessage('chat', 'xjx', 'test data');
            wss.broadcast(msg);
        }
    });

    ws.on('error',(err) =>{
        console.log(`errored: ${err}`);
    });
});


createMessage = (type, user, data) => {
    return JSON.stringify({
        id: 1,
        type: type,
        user: user,
        data: data
    });
}