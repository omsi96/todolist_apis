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

exports.taskUpdate = (req, res) => {
  console.log("Updating!");
  const { taskId } = req.params;
  const foundTask = tasks.find((task) => task.id === +taskId);
  if (foundTask) {
    Object.assign(foundTask, { ...foundTask, done: !foundTask.done });
    console.log(tasks);
    res.json(foundTask);
    console.log("Updating to ");
  } else {
    console.log("No task found!!", taskId);
    res.status(404).json({ message: "Task not found" });
  }
};

exports.taskCreate = (req, res) => {
  const body = req.body;

  if (body.title) {
    const id = tasks.length <= 0 ? 1 : tasks[tasks.length - 1].id + 1;
    const done = false;
    const newTask = { id, done, ...body };
    tasks.push(newTask);
    res.status(201).json(newTask);
  } else {
    res.status(400).json({ message: "You didn't fill the body!" });
  }
};
