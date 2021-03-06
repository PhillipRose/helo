require('dotenv').config();
const ctrl = require('./controller');
const express = require('express');
const app = express();
const massive = require('massive');
const{SERVER_PORT, CONNECTION_STRING} = process.env;
app.use(express.json())
app.listen(4000, ()=> console.log('server is running on 4000'))


massive({
    connectionString: CONNECTION_STRING, ssl: {rejectUnauthorized: false}
}).then(db => {
    app.set('db', db)
    console.log('db connected')
})
