const { sqlQuery } = require('../db/db');

async function getUserInfo() {
    let sql = 'SELECT * FROM user_info;';
    let dataList = await sqlQuery(sql);

    return dataList;
}

async function login(query) {
    let sql = `SELECT * FROM user_info WHERE userName = ? AND passWord = ?;`
    let values = [query.userName, query.passWord];
    let dataList = await sqlQuery(sql, values);

    return dataList;
}

module.exports = {
    getUserInfo: getUserInfo,
    login: login
}