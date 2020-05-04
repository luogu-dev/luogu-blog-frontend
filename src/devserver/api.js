const { join } = require('path')
const { rewriter, router } = require('json-server')

const apiRouter = router(join(__dirname, 'db.json'))

apiRouter.render = (req, res) => {
  res.jsonp({
    status: 200,
    data: {
      count: 31,
      result: res.locals.data
    }
  })
}

module.exports = {
  apiRewrite: rewriter({
    '/blog/lists?uid=:uid&page=:page': '/blogPosts?author.uid=:uid&_page=:page',
    '/blog/replies/:blogId?page=:page': '/comments?_page=:page'
  }),
  apiRouter
}
