const express = require('express')
const router = express.Router();
const Todo = require('../../models/Todo')

router.get('/', (req, res) => {
    Todo.find()
       .then(items => res.json(items))
})

router.post('/', (req, res) => {
    const newTodo = new Todo({
        name: req.body.name
    })
    newTodo.save().then(item => res.json(item))
})

router.delete('/:id', (req, res) => {
    Todo.findById(req.params.id)
    .then(item => item.remove())
    .then(() => res.json('deleted!'))
})
module.exports = router