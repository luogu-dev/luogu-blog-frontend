const express = require('express')
const Handlebars = require('handlebars')
const fs = require('fs')
const path = require('path')

const { apiRewrite, apiRouter } = require('./api')

const Partials = {
  article: [
    { name: 'content', fpath: 'article/content.hbs' },
    { name: 'scripts', fpath: 'article/scripts.hbs' },
    { name: 'styles', fpath: 'article/styles.hbs' }
  ],
  index: [
    { name: 'content', fpath: 'article_list/content.hbs' },
    { name: 'scripts', fpath: 'article_list/scripts.hbs' },
    { name: 'styles', fpath: 'article_list/styles.hbs' }
  ]
}

const BlogMeta = {
  blogUID: 256,
  blogName: '卡速米之家',
  blogSubtitle: '卡速米真好吃'
}

const getPartials = (theme, page) => {
  const resolvedPaths = Partials[page].map(({ name, fpath }) => ({
    name,
    fpath: path.resolve(__dirname, '..', 'templates', theme, 'handlebars', fpath)
  }))
  return resolvedPaths.map(({ name, fpath }) => ({
    name,
    partial: fs.readFileSync(fpath, 'utf8')
  }))
}

const registerPartials = (theme, page) => {
  const partials = getPartials(theme, page)
  partials.forEach(({name, partial}) => Handlebars.registerPartial(name, partial))
}

const compileTmpl = theme => Handlebars.compile(fs.readFileSync(path.resolve(__dirname, '..', 'templates', theme, 'handlebars', 'template.hbs'), 'utf8'))

const app = express()

app.use('/api/', apiRewrite)
app.use('/api/', apiRouter)

app.use('/static/blog/', express.static(path.resolve(__dirname, '..', '..', 'dist')))

app.get('/favicon.ico', (req, res) => res.sendStatus(404))

app.get('/:theme/', (req, res) => {
  registerPartials(req.params.theme, 'index')
  res.send(compileTmpl(req.params.theme)(Object.assign(BlogMeta, { isBlogAdmin: req.query.isAdmin, currentUser: req.query.currentUser })))
})

app.get('/:theme/:articleId', (req, res) => {
  registerPartials(req.params.theme, 'article')
  res.send(compileTmpl(req.params.theme)(Object.assign(BlogMeta, require('./fakepost')(), { isBlogAdmin: req.query.isAdmin, currentUser: req.query.currentUser })))
})

app.listen(process.env.PORT || 3000, () => console.log(`Preview server is running at http://localhost:${process.env.PORT || 3000}`))
