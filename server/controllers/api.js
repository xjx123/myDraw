const { sqlQuery } = require('../db/db');

async function getUserInfo() {
    let sql = 'SELECT * FROM user_info';

    return await sqlQuery(sql);
}

async function login(query) {
    let sql = `SELECT * FROM user_info WHERE userName = ? AND passWord = ?`
    let values = [query.userName, query.passWord];

    return await sqlQuery(sql, values);
}

async function getRoomList() {
    let sql = 'SELECT * FROM draw_room WHERE status = 1';

    return await sqlQuery(sql);
}

module.exports = {
    getUserInfo,
    login,
    getRoomList
}