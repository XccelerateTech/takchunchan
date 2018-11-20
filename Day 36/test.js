var redis = require('redis');
var client = redis.createClient({
    host: 'localhost',
    port: 6379,
    password: 'test'
});


client.on('connect', function(){
    console.log('good')
})


client.flushdb(function(){
    console.log('good')
})
