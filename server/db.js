const Pool = require('pg').Pool;

const pool = new Pool({
    user: "postgres",
    password: 'cloudyskies',
    host:'localhost',
    port: 5432,
    database: "habittracker"
});

module.exports = pool;