const moongose = require('mongoose');

let Schema = moongose.Schema;

enumTask = {
    values: ['TO DO', 'IN PROGRESS', 'DONE', 'DELETED'],
    message: '{VALUE} It is not a valid value'
};

let taskSchema = new Schema({
    name: {
        type: String,
        required: [true, 'task name is required']
    },
    description: {
        type: String,
        required: [true, 'task description is required']
    },
    state: {
        type: String,
        default: 'TO DO',
        enum: enumTask
    },
    deleted: {
        type: Boolean,
        default: false
    }
});

module.exports = moongose.model('Task', taskSchema);