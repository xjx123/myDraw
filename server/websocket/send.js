const webSocketController = require('../controllers/websocket');
const { startGame } = require('./startGame');

broadcast = (wss, data) => {
    wss.clients.forEach((client) => {
        client.send(data);
    });
}

module.exports = async (wss, ws, message) => {
    console.log('websocket send message: ', message);
    const messageData = JSON.parse(message);
    let data;
    switch (messageData.type) {
        case 'createRoom':
            let createRoomData = {
                name: messageData.data.roomName,
                createTime: messageData.data.createTime,
                status: 1,
                isPublic: messageData.data.isPublic
            }

            data = await webSocketController.createRoom(createRoomData);
            broadcast(wss, JSON.stringify({
                data: Object.assign({}, createRoomData, { id: data.insertId }),
                type: 'addRoom'
            }));

            break;
        case 'addRoomUser':
            data = await webSocketController.addRoomUser(messageData.data);
            broadcast(wss, JSON.stringify({
                data: messageData.data,
                type: 'addRoomUser'
            }));

            break;
        case 'startGame':
            broadcast(wss, JSON.stringify({
                data: messageData.data,
                type: 'startGame'
            }));

            let roomId = messageData.data.roomId;
            startGame(wss, roomId);

            break;
        case 'drawPicture':
            broadcast(wss, JSON.stringify({
                data: messageData.data,
                type: 'drawPicture'
            }));

            break;
        default:
            console.warn('websocket not send message type');
    }
}