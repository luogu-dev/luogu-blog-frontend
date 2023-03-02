import Vue from 'vue'
import './common'
import {
  initKatex,
  initHighlight
} from 'scripts/article'
import ArticleVote from './layouts/article_vote.vue'
import ArticleComments from './layouts/article_comments.vue'
import $ from 'jquery'
import ArticleNav from './layouts/article_nav.vue'
import TOC from './layouts/toc.vue'
import Admonition from './layouts/admonition.vue'
import './styles/github.css'
import './styles/github_dark.css'
import './styles/article.css'

BlogGlobals.luoguAddress = 'https://www.luogu.com.cn'
BlogGlobals.picAddress = 'https://cdn.luogu.com.cn'

window.navBar = new Vue({
  el: '#nav-bar',
  render: h => h(ArticleNav)
})

async function initHljs () {
  // Function
  $('pre code').each((_, block) => {
    const classes = $(block)[0].className.split(' ')
    let isHljs = false
    for (let i = 0; i < classes.length; i++) {
      const name = classes[i]
      if (name === 'hljs') {
        isHljs = true
      }
      const matchLang = name.match(/^language-(\w+)(\{[\d\-,]+\})?(\*?)$/)
      if (!matchLang) {
        continue
      }
      isHljs = true
      classes[i] = 'language-' + matchLang[1]
      if (matchLang[2] !== undefined) {
        const res = matchLang[2].match(/\d+-\d+|\d+/g)
        for (let i = 0; i < res.length; i++) {
          const ps = res[i].split('-')
          if (ps.length === 1) {
            ps.push(ps[0])
          }
          res[i] = ps
          // add highlights here
        }
        $(block).parent().attr('line-highlights', JSON.stringify(res))
      }
      if (matchLang[3] === '*') {
        $(block).parent().attr('line-numbers', true)
      }
    }
    if (isHljs) {
      $(block).parent().attr('is-hljs', true)
    }
    $(block).attr('class', classes.join(' '))
  })
  await initHighlight()
  $('pre').each((_, block) => {
    if ($(block).attr('is-hljs') === undefined) {
      return
    }
    const code = $(block).find('code')
    const u = $('<div class="code-wrapper"/>')
    $(block).append(u)
    u.append(code)
    const len = code.text().split('').reduce((prev, curr) => prev + (curr === '\n'), 0) + 1
    if ($(block).attr('line-numbers') !== undefined) {
      u.prepend('<div class="hljs-line-numbers"><div class="hljs-line-numbers-wrapper">' + [...Array(len).keys()].map(x => x + 1).join('<br>') + '</div></div>')
    }
    if ($(block).attr('line-highlights') !== undefined) {
      const lines = JSON.parse($(block).attr('line-highlights'))
      const arr = []
      for (let i = 1; i <= len; i++) {
        arr.push(false)
      }
      for (let i = 0; i < lines.length; i++) {
        for (let j = lines[i][0]; j <= lines[i][1]; j++) {
          if (j > 0 && j <= len) {
            arr[j - 1] = true
          }
        }
      }
      $(block).prepend('<div class="hljs-line-highlights">' + arr.map(x => (x ? '<div class="highlighted">&nbsp;</div>' : '<br>')).join('') + '</div>')
    }
    if (navigator.clipboard !== undefined) {
      $(block).prepend(`
        <div class='active-button small copy-code'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18 2H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H9V4h9v12zM3 15v-2h2v2H3zm0-5.5h2v2H3v-2zM10 20h2v2h-2v-2zm-7-1.5v-2h2v2H3zM5 22c-1.1 0-2-.9-2-2h2v2zm3.5 0h-2v-2h2v2zm5 0v-2h2c0 1.1-.9 2-2 2zM5 6v2H3c0-1.1.9-2 2-2z"/></svg>
        </div>
      `)
    }
  })
  $('.copy-code').click(function () {
    const that = this
    if ($(this).hasClass('locked')) {
      return
    }
    const str = $(this).parent().find('code').text()
    navigator.clipboard.writeText(str).then(
      () => {
        $(that).addClass('locked')
        $(that).html(`
          <svg style='color: var(--green-main)' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M21 7 9 19l-5.5-5.5 1.41-1.41L9 16.17 19.59 5.59 21 7Z"/></svg>
        `)
        setTimeout(() => {
          $(that).html(`
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18 2H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H9V4h9v12zM3 15v-2h2v2H3zm0-5.5h2v2H3v-2zM10 20h2v2h-2v-2zm-7-1.5v-2h2v2H3zM5 22c-1.1 0-2-.9-2-2h2v2zm3.5 0h-2v-2h2v2zm5 0v-2h2c0 1.1-.9 2-2 2zM5 6v2H3c0-1.1.9-2 2-2z"/></svg>
          `)
          $(that).removeClass('locked')
        }, 1000)
      },
      () => {
        $(that).addClass('locked')
        $(that).html(`
          <svg style='color: var(--darkorange-main)' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41Z"/></svg>
        `)
        setTimeout(() => {
          $(that).html(`
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18 2H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H9V4h9v12zM3 15v-2h2v2H3zm0-5.5h2v2H3v-2zM10 20h2v2h-2v-2zm-7-1.5v-2h2v2H3zM5 22c-1.1 0-2-.9-2-2h2v2zm3.5 0h-2v-2h2v2zm5 0v-2h2c0 1.1-.9 2-2 2zM5 6v2H3c0-1.1.9-2 2-2z"/></svg>
          `)
          $(that).removeClass('locked')
        }, 1000)
      }
    )
  })
}

function initTOC () {
  const tocList = []
  const nameList = {}
  $('#article-content h1, #article-content h2, #article-content h3, #article-content h4, #article-content h5, #article-content h6').each((_, block) => {
    const idx = parseInt($(block)[0].tagName.substring(1))
    const original = $(block).text()
    let content = original.slice().replace(/\s/g, '_')
    if (nameList[content] !== undefined) {
      for (let i = 1; ; i++) {
        if (nameList[content + '_' + i] === undefined) {
          content = content + '_' + i
          break
        }
      }
    }
    nameList[content] = true
    const lnk = $(`<a title="定位到这里" class="headerlink" href="javascript:window.locateHeader('${content.replace(/'/g, "\\'")}')"></a>`)
    $(block).append(lnk).attr('name', content)
    tocList.push([idx, content, original])
  })

  window.headerlinkInfo = tocList
  window.tocComponent = new Vue({
    el: '#toc-wrapper',
    render: h => h(TOC)
  })

  window.locateHeader = (context) => {
    if (context.length === 0) {
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
      $('.headerlink-actve').removeClass('headerlink-actve')
    }
    context = decodeURIComponent(context)
    const u = $(`[name='${context.replace(/'/g, "\\'")}']`)
    if (u.length !== 0) {
      const loc = u.position().top
      document.body.scrollTop = loc - 48
      document.documentElement.scrollTop = loc - 48
      $('.headerlink-actve').removeClass('headerlink-actve')
      u.find('.headerlink').addClass('headerlink-actve')
    }
    location.hash = '#' + context
  }

  if (location.hash.length !== 0) {
    window.locateHeader(location.hash.substring(1))
  }
  window.addEventListener('hashchange', () => {
    if (location.hash.length !== 0) {
      window.locateHeader(location.hash.substring(1))
    }
  })
}

function initAdmonitions () {
  const alias = {
    note: 'blue',
    abstract: 'skyblue',
    info: 'cyan',
    tip: 'teal',
    success: 'green',
    question: 'lightgreen',
    warning: 'orange',
    error: 'deeporange',
    failure: 'deeporange',
    danger: 'red',
    bug: 'darkred',
    example: 'deeppurple',
    quote: 'grey'
  }
  const bqList = []
  $('#article-content blockquote').each((_, block) => {
    const ele = $(block)
    if (ele.parents('[is-admonition]').length !== 0) {
      return
    }
    if (ele.children().length > 1) {
      const fele = $(block).children().eq(0)
      const info = [-1, '', '', '', false, null]
      if (fele[0].tagName !== 'P') {
        return
      }
      const cnts = $.trim(fele.html()).split(' ')
      if (cnts.length === 0) {
        return
      }
      if (cnts[0] === '!!!') {
        info[0] = 0
      } else if (cnts[0] === '???') {
        info[0] = 1
      } else if (cnts[0] === '???+') {
        info[0] = 2
      } else {
        return
      }
      if (cnts.length === 1 || !Object.prototype.hasOwnProperty.call(alias, cnts[1])) {
        info[1] = 'note'
        info[3] = $.trim(cnts.slice(1).join(' '))
      } else {
        info[1] = cnts[1]
        info[3] = $.trim(cnts.slice(2).join(' '))
      }
      info[2] = alias[info[1]]
      info[5] = block
      fele.remove()
      if (ele.children().length === 1) {
        const lele = ele.children().eq(0)
        if (lele[0].tagName === 'PRE') {
          info[4] = true
        }
      }
      bqList.push(info)
      ele.attr('is-admonition', true)
    }
  })
  window.admonitions = []
  for (let i = 0; i < bqList.length; i++) {
    const [block, type, color, title, fullWidth, ele] = bqList[i]
    window.admonitions.push(new Vue({
      el: ele,
      render: h => h(Admonition, {
        props: {
          block: block,
          type: type,
          color: color,
          title: title,
          fullWidth: fullWidth,
          html: ele.innerHTML
        }
      })
    }))
  }
}

function initTable () {
  $('#article-content table').each((_, block) => {
    $(block).wrapAll('<div class="table-wrapper"></div>')
  })
}

async function initAll () {
  initKatex()
  initAdmonitions()
  await initHljs()
  initTOC()
  initTable()
}

initAll()

window.articleVote = new Vue({
  el: '#post-votes',
  render: h => h(ArticleVote)
})

window.articleComments = new Vue({
  el: '#article-comments',
  render: h => h(ArticleComments)
})
