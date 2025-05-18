const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
	title: String,
	author: String,
	url: String,
	likes: Number,
})

const Blog = new mongoose.model('Blog', blogSchema)

mongoose.set('strictQuery', false)

module.exports = {
	Blog,
	blogSchema,
}
