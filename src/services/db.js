const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'LightEos27.6',
    database: 'tension_cosmos',
    connectionLimit: 10,
});

module.exports = pool;