const Task = require('../models/task');

let getAllTask = async(req, res) => {
    const tasks = await Task.find();
    res.status(201).json(tasks)
}


let saveOneTask = async(req, res) => {
    const body = req.body;

    let task = new Task({
        name: body.name,
        description: body.description,
        state: body.state
    });

    await task.save((err, taskDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err: err
            });
        }
        res.status(200).json({
            ok: true,
            task: taskDB
        })
    })
}


let deleteTask = async(req, res) => {
    let id = req.params.id;

    await Task.findOneAndUpdate({ _id: id }, { state: 'DELETED' }, { new: true }, (err, taskDeleted) => {
        if (err) {
            res.status(400).json({
                ok: false,
                err
            });
        }
        if (taskDeleted === null) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'task not found'
                }
            });
        }
        res.status(200).json({
            ok: true,
            task: taskDeleted
        })
    });
}

let taskDeleted = async(req, res) => {
    const taskDeleted = await Task.find({ state: 'DELETED' })
    res.status(201).json(taskDeleted)
}

let updateState = async(req, res) => {
    let id = req.params.id;

    const task = await Task.findById(id);

    switch (task.state) {
        case 'TO DO':
            await Task.findOneAndUpdate({ _id: id }, { state: 'IN PROGRESS' }, { new: true }, (err, taskDB) => {
                res.json({ task })
            })
            break;
        case 'IN PROGRESS':
            await Task.findOneAndUpdate({ _id: id }, { state: 'DONE' }, { new: true }, (err, taskDB) => {
                res.json({ task })
            })
            break;
        case 'DONE':
            await Task.findOneAndUpdate({ _id: id }, { state: 'DELETED' }, { new: true }, (err, taskDB) => {
                res.json({ task })
            })
            break;
        case 'DELETED':
            await Task.findOneAndUpdate({ _id: id }, { state: 'TO DO' }, { new: true }, (err, taskDB) => {
                res.json({ task })
            })
            break;

        default:
            break;
    }
}

let getTask = async(req, res) => {
    const task = await Task.findById(req.params._id);
    res.status(201).json({ task });
}

module.exports = {
    getAllTask,
    saveOneTask,
    deleteTask,
    updateState,
    getTask,
    taskDeleted
}