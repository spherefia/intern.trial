const mysql = require('mysql2');
const dbConnection = mysql.createPool({
    host: 'localhost', // MYSQL HOST NAME
    user: 'root', // MYSQL USERNAME
    password: '212545saf', // MYSQL PASSWORD
    database: 'trial' // MYSQL DB NAME
}).promise();
module.exports = dbConnection;