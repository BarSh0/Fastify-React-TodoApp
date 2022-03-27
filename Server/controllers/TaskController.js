const { v4: uuidv4 } = require('uuid')
let tasks = require('../TasksDB')

const getTasks = (req, reply) => {
  reply.send(tasks)
}

const getTask = (req, reply) => {
  const { id } = req.params

  const task = tasks.find((task) => task.id === id)

  reply.send(task)
}

const addTask = (req, reply) => {
  const { description } = req.body
  const task = {
    id: uuidv4(),
    description,
    status: false
  }

  tasks = [...tasks, task]

  reply.code(201).send(task)
}

const deleteTask = (req, reply) => {
  const { id } = req.params

  tasks = tasks.filter((task) => task.id !== id)

  reply.send({ message: `Task ${id} has been removed` })
}

const updateTask = (req, reply) => {
  const { id } = req.params
  const { description } = req.body

  tasks = tasks.map((task) => (task.id === id ? { id, description } : task))

  task = tasks.find((task) => task.id === id)

  reply.send(task)
}

module.exports = {
  getTasks,
  getTask,
  addTask,
  deleteTask,
  updateTask,
}