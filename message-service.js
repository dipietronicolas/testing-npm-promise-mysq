const pool = require('./dbConnection');

messageService = {};

const resolvePool = async () => {

    const connection = await pool();

    return connection.query(`SELECT * FROM chat_room`)
        .then(rows => {
            // console.log(rows)
            return Promise.resolve(rows[0])
        })
        .catch(err => {
            // console.log(err)
            return Promise.reject(err)
        })
}

messageService.readDataBase = async () => {
    const dataFetched = await resolvePool();
    console.log(dataFetched);
}

module.exports = messageService;
