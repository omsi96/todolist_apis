const express = require("express");
const router = express.Router();
const tasks = require("../tasks");
const {
  taskList,
  taskDelete,
  taskCreate,
} = require("../controllers/taskController");

router.get("/", taskList);

router.post("/", taskCreate);

router.delete("/:taskId", taskDelete);

module.exports = router;
