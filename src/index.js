global.Promise = require('bluebird')
const express = require('express')
const bodyParser = require('body-parser')
const Sequelize = require('sequelize')
const Book = require('./book')
const Category = require('./category')
const db = require('./database')

const app = express()
const port = 8081
const sequelize = new Sequelize(db.name, db.username, db.password, db.options)

sequelize
  .authenticate()
  .then(() => {
    console.log('Successfully connected to db!')
  })
  .catch(err => {
    console.error(`Unable to connect to db: ${err}`)
  })

sequelize.sync({ force: false })

Book.model = Book.model.init(sequelize)
Category.model = Category.model.init(sequelize)
Book.model.associate(Category.model)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const router = express.Router()

router.get('/', (req, res) =>
  res.json({
    message: 'Welcome to Entity Project Structure API!',
  })
)

// Routes
router.use('/books', Book.routes)
router.use('/categories', Category.routes)

app.use(router)

app.use((err, req, res) => {
  if (!err.status) err.status = 500
  res.status(err.status).send({ error: err.message })
})

app.listen(port)
console.log('Api runnin on port ' + port)
