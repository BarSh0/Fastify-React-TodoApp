const fastify = require('fastify')({ logger: true })

fastify.register(require('fastify-cors'), function (instance) {

  return (req, callback) => {
    let corsOptions;
    const origin = req.headers.origin
    // do not include CORS headers for requests from localhost
    const hostname = new URL(origin).hostname
    if(hostname === "localhost"){
      corsOptions = { origin: true }
    } else {
      corsOptions = { origin: true }
    }
    callback(null, corsOptions) // callback expects two parameters: error and options
  }
})


fastify.register(require('fastify-swagger'), {
  exposeRoute: true,
  routePrefix: '/docs',
  swagger: {
    info: { title: 'fastify-api' },
  },
})
fastify.register(require('./routes/TaskRouter'))

const PORT = 5000

const start = async () => {
  try {
    await fastify.listen(PORT)
  } catch (error) {
    fastify.log.error(error)
    process.exit(1)
  }
}

start()