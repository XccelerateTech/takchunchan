var fs = require('fs');
var CsvReadableStream = require('csv-reader');
var pg = require('pg');

var inputStream = fs.createReadStream('transaction_record.csv', 'utf8');

var config = {
    user: 'admin',
    database: 'postgres',
    password: 'admin',
    host: 'localhost',
    port: 5432,
    max: 10, // max number of clients in the pool
    idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
}

var client = new pg.Client(config);

client.connect();


inputStream
    .pipe(CsvReadableStream({ parseNumbers: true, parseBooleans: true, trim: true }))
    .on('data', function (row) {
        console.log('A row arrived: ', row);
        begin(function () {
            if (row[0] == 'BUY') {
                transaction(row[1], row[2], 'bought')
            } else {
                checkStock(row[1], row[2], 'sold')
            }
        }
    )
})
    .on('end', function (data) {
        console.log('No more rows!');
    });

function begin(done) {
    client.query('BEGIN', function (err) {
        if (err) {
            console.log('rollback error')
        }
        done();
    });
}

function commit(done) {
    client.query('COMMIT', function (err) {
        if (err) {
            console.log('commit error');
        }
        done();
    });
}

function rollback(done) {
    client.query('ROLLBACK', function (err) {
        if (err) {
            console.log('rollback error')
        }
        done();
    });
}

function transaction(fruitName, QtyChange, direction) {
    client.query(`UPDATE stock SET quantity = quantity + ${QtyChange} WHERE cirtus_id = (SELECT id FROM citrus WHERE name = '${fruitName}')`, function (err, results) {
        if (err) {
            rollback(function () {
                console.log("Transaction is rolled back!");
            });
        } else {
            commit(function () {
                console.log(`Transaction is committed! ${QtyChange} ${fruitName} ${direction}`);
            });
        }
    })
}


function checkStock(fruitName, QtyChange, direction) {
    client.query(`SELECT quantity FROM stock WHERE cirtus_id = (SELECT id FROM citrus WHERE name = '${fruitName}')`)
        .then(res => {
            if (res.rows[0].quantity >= QtyChange) {
                transaction(fruitName, QtyChange, direction);
            } else {
                throw err
            }
        })
        .catch(err => console.log(`not enough '${fruitName}'`))
    }
