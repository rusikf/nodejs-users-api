require('dotenv').config()
const express = require("express")
import useRoutes from './controllers/users'

function createServer() {
	const app = express()
	app.use(express.json())
	useRoutes(app)
  return app
}

module.exports = createServer
