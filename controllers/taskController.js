let tasks = require("../tasks");

exports.taskList = (req, res) => {
  res.json(tasks);
};

exports.taskDelete = (req, res) => {
  const { taskId } = req.params;
  const foundTask = tasks.find((task) => task.id === +taskId);
  if (foundTask) {
    tasks = tasks.filter((task) => task !== foundTask);
    console.log(tasks);
    res.status(204).end();
  } else {
    res.status(404).json({ message: "Task not found" });
  }
};

exports.taskCreate = (req, res) => {
  const id = tasks[tasks.length - 1].id + 1;
  const done = false;
  const newTask = { id, done, ...req.body };
  tasks.push(newTask);
  res.status(201).json(newTask);
};
