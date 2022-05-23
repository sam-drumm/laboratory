const path = require('path')
const express = require('express')

require('dotenv').config({ path: path.join(__dirname, '.env') })

const usersRoutes = require('./routes/users')
const projectsRoutes = require('./routes/projects')

const server = express()

server.use(express.static(path.join(__dirname, 'public')))
server.use(express.json())

server.use('/api/v1/users', usersRoutes)
server.use('/api/v1/projects', projectsRoutes)

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'))
})

module.exports = server
