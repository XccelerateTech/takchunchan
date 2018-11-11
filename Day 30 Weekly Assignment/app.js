//installation
const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const basicAuth = require('express-basic-auth')


var app = express();

//basic auth
 
app.use(basicAuth({
    authorizer: myAuthorizer,
    challenge: true,
    realm: 'My Application'
}));

const USERS = [
    {
        "username":"admin",
        "password":"admin"
    },
    {
        "username":"tom",
        "password":"tom"
    }
]

function myAuthorizer(username, password) {
    return USERS.some((user)=>{
        return user.username == username && user.password == password
    })
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