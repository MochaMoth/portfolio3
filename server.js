const express = require("express");
const path = require("path");
const cors = require("cors");
const bodyparser = require("body-parser");
const routes = require("./src/routes");

const app = express();

const allowedOrigins = [
    "http://localhost:3000",
    "http://localhost:3001"
];

app.use(cors({
    origin: (origin, callback) =>
    {
        if (!origin) return callback(null, true);
        if (allowedOrigins.indexOf(origin) === -1)
        {
            msg = "The CORS policy for this site does not allow access from the specified Origin.";
            return callback(new Error(msg), false);
        }

        return callback(null, true);
    }
}));

app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api", routes);
app.use(express.static(path.join(__dirname, 'frontend/build')));
app.get('/*', (req, res) => res.sendFile(path.join(__dirname, 'frontend/build', 'index.html')));

let port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Listening on port ${port}...`));