const express = require("express");
const cors = require("cors");
const taskRouter = require("./routers/taskRouter");

const app = express();
app.use(cors());

app.use(taskRouter);

app.listen(80);
