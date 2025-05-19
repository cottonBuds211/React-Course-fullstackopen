const blogs = [
    {
      _id: "5a422a851b54a676234d17f7",
      title: "React patterns",
      author: "Michael Chan",
      url: "https://reactpatterns.com/",
      likes: 7,
      __v: 0
    },
    {
      _id: "5a422aa71b54a676234d17f8",
      title: "Go To Statement Considered Harmful",
      author: "Edsger W. Dijkstra",
      url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
      likes: 5,
      __v: 0
    },
    {
      _id: "5a422b3a1b54a676234d17f9",
      title: "Canonical string reduction",
      author: "Edsger W. Dijkstra",
      url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
      likes: 12,
      __v: 0
    },
    {
      _id: "5a422b891b54a676234d17fa",
      title: "First class tests",
      author: "Robert C. Martin",
      url: "http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll",
      likes: 10,
      __v: 0
    },
    {
      _id: "5a422ba71b54a676234d17fb",
      title: "TDD harms architecture",
      author: "Robert C. Martin",
      url: "http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html",
      likes: 0,
      __v: 0
    },
    {
      _id: "5a422bc61b54a676234d17fc",
      title: "Type wars",
      author: "Robert C. Martin",
      url: "http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html",
      likes: 2,
      __v: 0
    }  
  ]

const dummy = (blogs) => {
    return 1
}

const totalLikes = (blogs) => {
   return blogs.reduce((sum,item) => sum + item.likes, 0)
}

const favoriteBlog = (blogs) => {
   if(blogs.length === 0) return 0
    
    return blogs.reduce((top, blog) => 
        blog.likes > top.likes ? blog : top
    )
}

const mostBlogs = (blogs) => {
    // returns author with most blogs including the number of their blogs

    if (blogs.length === 0) return 0

    const counts = blogs.reduce((acc, blog) => 
        {
            acc[blog.author] = (acc[blog.author] || 0) + 1
            return acc
        }, {}
    )
    const topAuthor = Object.entries(counts).reduce((max, [author, count]) => {
        return count > max.blogs ? {author, blogs: count} : max
    }, {author: "", blogs: 0})

    return topAuthor
}

const mostLikes = (blogs) => {
    if(blogs.length === 0) return 0

    const counts = blogs.reduce((acc, blog) => {
        acc[blog.author] = (acc[blog.author] || 0) + blog.likes
        return acc
    }, {})
    
    const topLikes = Object.entries(counts).reduce((max, [author, count]) => {
        return count > max.likes ? {author, likes: count} : max
    }, {author:"", likes: 0}) 

    return topLikes
}
console.log(mostLikes([  {
    _id: "5a422a851b54a676234d17f7",
    title: "React patterns",
    author: "Michael Chan",
    url: "https://reactpatterns.com/",
    likes: 7,
    __v: 0
  }]))
module.exports = {dummy, totalLikes, favoriteBlog, mostBlogs, mostLikes}

