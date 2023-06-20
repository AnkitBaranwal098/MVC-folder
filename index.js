const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const PORT = 8000;
const app = express();

const expressLayouts = require('express-ejs-layouts')
const db = require('./config/mongoose')

app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());


app.use(express.static('./assets'))
app.use(expressLayouts)

//extract styles and scripts from sub pages into the layout
app.set('layout extractStyles',true)
app.set('layout extractScripts',true);

//Use express router
const routes = require("./routes/index");

app.use("/",routes);

//Set up view engine
app.set("view engine","ejs");
app.set("views","./views");

app.listen(PORT,(err)=>{
    if(err){
        console.log(`Error occurred while listening to PORT=${PORT}`)
        return
    }

    console.log(`Server listening to PORT=${PORT}`)
})