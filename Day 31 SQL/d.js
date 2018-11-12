var pg = require('pg');

var config = {
    user: 'admin',
    database: 'postgres',
    password: 'admin',
    host: 'localhost',
    port: 5432,
    max: 10, // max number of clients in the pool
    idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
}

//too lazy to add back a fruit table :0)

var client = new pg.Client(config);

client.connect();

client.query('SELECT first_name,last_name FROM employee WHERE salary > 10000', function(err, results) {
    if(err) {
        console.log(err);
    }
    console.log(results.rows);
})