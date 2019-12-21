const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT || 3000;

const express = require("express");
const bodyParser = require("body-parser");

// create express app
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

// default route
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to the amazing RESTful API of github repos 🌈"
  });
});

// Routes
require("./routes/routes.js")(app);

app.listen(port, () => console.log(`listening on port ${port}`));
