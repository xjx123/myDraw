const ws = require('ws');

const WebSocketServer = ws.Server;

module.exports = (server) => {
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
            console.log("string message: ", message);
            if (message && message.trim()) {
                let msg = createMessage('chat', 'xjx', 'test data');
                wss.broadcast(msg);
            }
        });

        ws.on('error', (err) => {
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
}