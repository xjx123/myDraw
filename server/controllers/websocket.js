const { sqlQuery } = require('../db/db');

async function createRoom(query) {
    let sql = 'INSERT INTO draw_room(id, name, createTime, status) VALUES (0, ?, ?, ?)';
    let values = [query.name, query.createRoom, query.status];

    return await sqlQuery(sql, values);
}

module.exports = {
    createRoom: createRoom
}