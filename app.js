const express = require('express')
const path = require('node:path')

const indexRouter = require('./routes/indexRouter')

const app = express()

const assetsPath = path.join(__dirname, 'public')
app.use(express.static(assetsPath))

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: true }))

app.use('/', indexRouter)

app.use((err, req, res, next) => {
  console.log(err)

  res.status(err.statusCode || 500).send(err.message)
})

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`)
})
