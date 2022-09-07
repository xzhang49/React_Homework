var express = require("express");
var app = express();
const cors = require('cors');
let data = require('./data.json');

app.use(express.json());
app.use(cors())

app.get("/", (req, res, next) => {
    res.json(data);
});

app.listen(3001, () => {
 console.log("Server running on port 3001");
});