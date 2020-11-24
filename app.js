const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const taskRouter = require("./routers/taskRouter");

// EXPRESS
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// ROUTES
app.use(taskRouter);

// PORT
app.listen(80);
