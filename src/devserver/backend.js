const Handlebars = require('handlebars')
const path = require('path')
const fs = require('fs')

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

const getThemeSettings = theme => {
  const themeSettings = require(path.resolve(__dirname, '..', 'templates', theme, 'example-config.json'))
  return {
    themeSettings,
    themeSettingsJson: JSON.stringify(themeSettings)
  }
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

module.exports.articleListHandler = (req, res) => {
  if (req.url[req.url.length - 1] !== '/') {
    res.redirect(req.url + '/')
  } else {
    registerPartials(req.params.theme, 'index')
    res.send(compileTmpl(req.params.theme)(Object.assign(BlogMeta, getThemeSettings(req.params.theme), { isBlogAdmin: req.query.isAdmin })))
  }
}

module.exports.articleHandler = (req, res) => {
  registerPartials(req.params.theme, 'article')
  res.send(compileTmpl(req.params.theme)(Object.assign(BlogMeta, getThemeSettings(req.params.theme), require('./fakepost')(), { isBlogAdmin: req.query.isAdmin })))
}
