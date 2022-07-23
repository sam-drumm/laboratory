const path = require('path')
const express = require('express')

const usersRoutes = require('./routes/users')
const projectsRoutes = require('./routes/projects')
const messagesRoutes = require('./routes/messages')

const server = express()

server.use(express.static(path.join(__dirname, 'public')))
server.use(express.json())

server.use('/api/v1/users', usersRoutes)
server.use('/api/v1/projects', projectsRoutes)
server.use('/api/v1/messages', messagesRoutes)

// general redirect to index
server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'))
})

module.exports = server
