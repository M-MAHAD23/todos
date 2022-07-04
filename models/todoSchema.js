const mongoose = require('mongoose')

const TodoSchema = mongoose.Schema({
    todoTitle:{
        type: String,
        required: [true,"TITLE REQUIRED"]
    },
    todoSubtitle:{
        type: String,
        required: [true,"SUBTITLE IS TITLE REQUIRED"]
    },
    todoCase:{
        type: String,
        required: true,
        default: false
    }
})

module.exports = mongoose.model('Todos',TodoSchema)
// const todoSchema = mongoose.model('todoSchema',TodoSchema)
// module.exports = todoSchema;