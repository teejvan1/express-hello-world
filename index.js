const express = require('express')
const app = express()

const port = process.env.PORT || 3000

app.set('view engine', 'hbs')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const mongoose = require('mongoose')
mongoose.connect(
  'mongodb+srv://teejvan1:navjeet1@honda.d2tgoxo.mongodb.net/honda',
  {
    useNewUrlParser: true,
  }
)

const Comment = mongoose.model('comment', {
  name: {
    type: String,
  },
  comment: {
    type: String,
  },
})

const path = require('path')
const publicDirectoryPath = path.join(__dirname, './public')
app.use(express.static(publicDirectoryPath))

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/about', (req, res) => {
  res.render('about')
})

app.get('/contact', async (req, res) => {
  try {
    const comments = await Comment.find({})
    res.render('contact', {
      comments,
    })
  } catch (e) {
    res.status(500).send()
  }
})

app.post('/added', async (req, res) => {
  const comment = new Comment(req.body)
  comment
    .save()
    .then(async () => {
      const comments = await Comment.find({})
      res.render('contact', {
        comments,
      })
    })
    .catch(e => {
      res.status(400).send(e)
    })
})

app.get('*', (req, res) => {
  res.render('404')
})

app.listen(port, () => {
  console.log('server is up on port 3000')
})
