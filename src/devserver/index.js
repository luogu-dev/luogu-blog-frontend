const express = require('express')
const path = require('path')

const { apiRewrite, apiRouter } = require('./api')
const { articleHandler, articleListHandler } = require('./backend')

const app = express()

app.use('/api/', apiRewrite)
app.use('/api/', apiRouter)

app.use('/static/blog/', express.static(path.resolve(__dirname, '..', '..', 'dist')))

app.get('/favicon.ico', (req, res) => res.sendStatus(404))

app.get('/:theme/', articleListHandler)
app.get('/:theme/:articleId', articleHandler)

app.listen(process.env.PORT || 3000, () => console.log(`Preview server is running at http://localhost:${process.env.PORT || 3000}`))
