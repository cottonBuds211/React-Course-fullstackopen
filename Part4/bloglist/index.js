require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
	title: String,
	author: String,
	url: String,
	likes: Number,
})

const Blog = new mongoose.model('Blog', blogSchema)

mongoose.set('strictQuery', false)

const mongoUrl = process.env.MONGODB_URI

console.log(`connecting to ${mongoUrl}`)

mongoose
	.connect(mongoUrl)
	.then(() => console.log('connected to MongoDB'))
	.catch(error => console.log('error connecting to MongoDB', error.message))

app.use(cors())
app.use(express.json())

app.get('/api/blogs', (req, res) => {
	Blog.find({}).then(blogs => res.json(blogs))
})

app.post('/api/blogs', (req, res) => {
	const blog = new Blog(req.body)

	blog.save().then(result => {
		res.status(201).send(result)
	})
})

const PORT = 3003
app.listen(PORT, () => {
	console.log(`Server running at port ${PORT}`)
})
