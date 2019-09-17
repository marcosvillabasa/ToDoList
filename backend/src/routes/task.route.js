const express = require('express');
const Router = express.Router();

const TaskController = require('../controllers/task.controller');

Router.route('/tasks')
    .get(TaskController.getAllTask)
    .post(TaskController.saveOneTask)

Router.route('/tasks/:id')
    .delete(TaskController.deleteTask)
    .put(TaskController.updateState);

Router.route('/tasks/deleted')
    .get(TaskController.taskDeleted)

module.exports = Router;