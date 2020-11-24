const express = require("express");
const router = express.Router();
const tasks = require("../tasks");
const {
  taskList,
  taskDelete,
  taskCreate,
  taskUpdate,
} = require("../controllers/taskController");

router.get("/", taskList);

router.post("/", taskCreate);

router.delete("/:taskId", taskDelete);
router.put("/:taskId", taskUpdate);

module.exports = router;
