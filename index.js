// import json.server
const jsonserver = require('json-server')

//create server app using json-server
const server = jsonserver.create()
// create middleware for handling json contents
const middleware = jsonserver.defaults()
// to set up path for json file
const routes = jsonserver.router('db.json')

//use middleware $ routes in server app
server.use(middleware)
server.use(routes)

const PORT = 3000
server.listen(PORT,()=>{
    console.log("Server Started!!!");
})