require('dotenv').config()
const config = require('./utils/config')
const express = require('express')
const logger = require('./utils/logger')
const mongoose = require('mongoose')
const cors = require('cors')
const blogsRouter = require('./controllers/blogs')

const app = express()

mongoose.set('strictQuery', false)

logger.info(`connecting to ${config.mongoUrl}`)
mongoose
	.connect(config.mongoUrl)
	.then(() => logger.info('connected to MongoDB'))
	.catch(error => logger.error('error connecting to MongoDB', error.message))

app.use(cors())
app.use(express.json())
app.use('/api/blogs', blogsRouter)

module.exports = app
