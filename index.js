const jsonServer = require('json-server')
const cors = require('cors')
const path = require('path')
  
const server = jsonServer.create()

const router = jsonServer.router(path.join(__dirname, 'post.json'))
const middlewares = jsonServer.defaults()

var whitelist = ['http://localhost:3000']
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}


server.use(cors(corsOptions))
server.use(jsonServer.bodyParser)
server.use(middlewares)
server.use(router)
const PORT = 8000

server.listen(PORT, () => {
  console.log(`JSON Server is running on http://localhost:${PORT}`)
})
