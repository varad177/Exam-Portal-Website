const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const homerouter = require("./routers/homerouter");

const port = process.env.port || 8080;

const app = express();

//data base connection

mongoose.connect('mongodb://127.0.0.1:27017/studentsdata', { useNewUrlParser: true });
const db = mongoose.connection;

db.on("error", () => {
    console.log("error in conection")
        ;
})

db.once('open', () => {
    console.log("connected")
})

app.set("view engine", "ejs");



app.use(express.static('public'));

// parse application/x - www - form - urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// app.use("/", homerouter);
app.use("/", homerouter);




 app.get('/home', (req, res) => {
     res.status(200).render('home.ejs')

 })

 app.get('/jr_home', (req, res) => {
    res.status(200).render('jr_home.ejs')

})
app.get('/ug_home', (req, res) => {
    res.status(200).render('ug_home.ejs')

})
app.get('/pg_home', (req, res) => {
    res.status(200).render('pg_home.ejs')

})

app.get('/jr_sci', (req, res) => {
    res.status(200).render('jr_sci.ejs')

})

app.get('/contact', (req, res) => {
    res.status(200).render('contact.ejs')

})
app.get('/dashboard', (req, res) => {
    res.status(200).render('dashboard.ejs')

})

app.get('/jr_arts', (req, res) => {
    res.status(200).render('jr_arts.ejs')

})

app.get('/jr_com', (req, res) => {
    res.status(200).render('jr_com.ejs')

})

app.get('/login', (req, res) => {
    res.status(200).render('login.ejs')

})

app.get('/pg_arts', (req, res) => {
    res.status(200).render('pg_arts.ejs')

})

app.get('/pg_com', (req, res) => {
    res.status(200).render('pg_com.ejs')

})

app.get('/pg_sci', (req, res) => {
    res.status(200).render('pg_sci.ejs')

})

app.get('/ug_arts', (req, res) => {
    res.status(200).render('ug_arts.ejs')

})

app.get('/ug_com', (req, res) => {
    res.status(200).render('ug_com.ejs')

})

app.get('/ug_sci', (req, res) => {
    res.status(200).render('ug_sci.ejs')

})
app.get('/samplepaper', (req, res) => {
    res.status(200).render('samplepaper.ejs')

})

app.get('/advertise', (req, res) => {
    res.status(200).render('advertise.ejs')

})

app.listen(8080);
