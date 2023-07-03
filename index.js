const express = require('express');
const app = express();
const cors = require("cors")
const mysql = require("mysql")
const nocache = require("nocache")
var port = 8000;

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "Wh0isthis??",
    database: "expense_tracker",
});


app.set("etag", false);
app.use(cors());
app.use(nocache());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.raw());
app.get('/', (req, res) => {
    res.send('Hello World!');
});


app.listen(port, () => {console.log(`listening on ${port}`)});

require('./routes/user.routes')(app)
require('./routes/expense.routes')(app)
require('./routes/income.routes')(app)
require('./routes/category.routes')(app)