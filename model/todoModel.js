const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const todoSchema = new Schema({
    title: {
        type : String,
        requried : true
    },
    description: {
        type: String,
        required: true 
    },
    priority: {
        type: String,
        requried: true
    },
    completed:{
        type: Boolean,
        requried: true
    }
},{ timestamps: true })

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo