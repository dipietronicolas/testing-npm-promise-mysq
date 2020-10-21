const mysql = require('promise-mysql');

const readDatabase = async () => {

    let pool = await mysql.createPool({
        connectionLimit: 113,
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME
    })

    return pool;
};

module.exports = readDatabase;
