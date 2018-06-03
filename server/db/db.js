const mysql = require('mysql');

// const connection = mysql.createConnection({
//     host: '120.79.39.180',
//     user: 'root',
//     password: 'Xjx13874731322',
//     port: '3306',
//     database: 'draw'
// });

// let query = (sql, values) => {
//     return new Promise((resolve, reject) => {
//         connection.connect();
//         connection.query(sql, values, (err, rows) => {
//             if (err) {
//                 reject(err);
//             } else {
//                 resolve(rows);
//             }
//             connection.end();
//         });
//     });
// }

const pool = mysql.createPool({
    host: '120.79.39.180',
    user: 'root',
    password: 'Xjx13874731322',
    port: '3306',
    database: 'draw'
});

let query = (sql, values) => {
    return new Promise((resolve, reject) => {
        pool.getConnection((err, connection) => {
            if (err) {
                reject(err);
            } else {
                connection.query(sql, values, (err, rows) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(rows);
                    }
                    connection.release();
                })
            }
        });
    });
}

module.exports = {
    query: query
}