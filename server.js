const express = require("express");
const path = require("path");
const cors = require("cors");
const bodyparser = require("body-parser");

const app = express();

app.use(cors({ origin: (origin, callback) => { return callback(null, true); } }));

app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'frontend/build')));
app.get('/*', (req, res) => res.sendFile(path.join(__dirname, 'frontend/build', 'index.html')));

let port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Listening on port ${port}...`));