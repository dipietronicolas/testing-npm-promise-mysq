const express = require('express');
const messageService = require('./message-service');
const app = express();
require('dotenv').config();

app.set('port', process.env.PORT || 3000)

messageService.readDataBase();

app.listen(app.get('port'), () =>{
    console.log(`Escuchanding on portus ${app.get('port')}`);
})


