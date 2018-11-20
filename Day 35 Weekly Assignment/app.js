//installation
const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const basicAuth = require('express-basic-auth');
const dotenv = require('dotenv').config()


var app = express();

//connect knext
const knexConfig = require('./knexfile').development;
const knex = require('knex')(knexConfig);

//basicAuth
app.use(basicAuth({
    authorizer: new AuthChallenger(knex),
    authorizeAsync: true,
    challenge: true,
}));


const AuthChallenger = function(knex){
    
    return function (username, password, callback){
        let query = knex.select('username')
            .from('users')
            .where('username', username)
            .where('password', password);

            query.then((rows)=>{
                if(rows.length ===1){
                    callback(null, true);
                } else {
                    callback (null, false);
                }
            }).catch((err)=>{
                callback(err);
            })
    }
}


//handle bar and view controls
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

const ViewRouter = require('./ViewRouter');
app.use('/',new ViewRouter().router());

//serve public file
app.use(express.static("public"));

//body Parser
app.use(bodyParser.urlencoded({ extended:false}));
app.use(bodyParser.json());

//services
let jsonFile = require ('./storage/JsonFile')

let NoteService = require('./service/noteService.js')

let noteService = new NoteService(new jsonFile('note.json'));

let NoteRouter = require('./routers/NoteRouter');

app.use('/api/note/',new NoteRouter(noteService).router());

//listen 
app.listen(3000);