const express = require('express')
const Handlebars = require('handlebars')
const fs = require('fs')
const path = require('path')

const Partials = {
  article: [
    { name: 'content', fpath: 'article/content.hbs' },
    { name: 'scripts', fpath: 'article/scripts.hbs' }
  ],
  index: [
    { name: 'content', fpath: 'article_list/content.hbs' },
    { name: 'scripts', fpath: 'article_list/scripts.hbs' }
  ]
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

const app = express()

app.use('/js/blog/', express.static(path.resolve(__dirname, '..', '..', 'dist')))

app.get('/favicon.ico', (req, res) => res.sendStatus(404))

app.get('/:theme/', (req, res) => {
  registerPartials(req.params.theme, 'index')
  const tmpl = Handlebars.compile(fs.readFileSync(path.resolve(__dirname, '..', 'templates', req.params.theme, 'handlebars', 'template.hbs'), 'utf8'))
  res.send(tmpl())
})

app.listen(process.env.PORT || 3000, () => console.log(`Preview server is running at http://localhost:${process.env.PORT || 3000}`))
