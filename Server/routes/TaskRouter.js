const {
    getTasks,
    getTask,
    addTask,
    deleteTask,
    updateTask,
  } = require('../controllers/TaskController')
  
  // Task schema
  const Task = {
    type: 'object',
    properties: {
      id: { type: 'string' },
      description: { type: 'string' },
      status: {type: 'boolean'}
    },
  }
  
  // Options for get all tasks
  const getTasksOpts = {
    schema: {
      response: {
        200: {
          type: 'array',
          tasks: Task,
        },
      },
    },
    handler: getTasks,
  }
  
  const getTaskOpts = {
    schema: {
      response: {
        200: Task,
      },
    },
    handler: getTask,
  }
  
  const postTaskOpts = {
    schema: {
      body: {
        type: 'object',
        required: ['description'],
        properties: {
          description: { type: 'string' },
        },
      },
      response: {
        201: Task,
      },
    },
    handler: addTask,
  }
  
  const deleteTaskOpts = {
    schema: {
      response: {
        200: {
          type: 'object',
          properties: {
            message: { type: 'string' },
          },
        },
      },
    },
    handler: deleteTask,
  }
  
  const updateTaskOpts = {
    schema: {
      response: {
        200: Task,
      },
    },
    handler: updateTask,
  }
  
  function taskRoutes(fastify, options, done) {
    // Get all tasks
    fastify.get('/tasks', getTasksOpts)
  
    // Get single tasks
    fastify.get('/tasks/:id', getTaskOpts)
  
    // Add task
    fastify.post('/tasks', postTaskOpts)
  
    // Delete task
    fastify.delete('/tasks/:id', deleteTaskOpts)
  
    // Update task
    fastify.put('/tasks/:id', updateTaskOpts)
  
    done()
  }
  
  module.exports = taskRoutes