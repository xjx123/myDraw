const { query } = require('../db/db');

async function getUserInfo() {
    let sql = 'SELECT * FROM user_info';
    let dataList = await query(sql);

    return dataList;
}

module.exports = {
    getUserInfo: getUserInfo
}