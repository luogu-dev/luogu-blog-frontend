import axios from 'axios'
import katex from 'katex'
import katexAutoRender from 'plugins/katex'
import { renderAllCodeElements } from 'plugins/hljs'

export function initHighlight () {
  return renderAllCodeElements()
}

export function initKatex () {
  window.katex = katex
  katexAutoRender(document.getElementById('article-content'), {
    delimiters: [
      {
        left: '$$',
        right: '$$',
        display: true
      },
      {
        left: '$',
        right: '$',
        display: false
      },
      {
        left: '\\[',
        right: '\\]',
        display: true
      },
      {
        left: '\\(',
        right: '\\)',
        display: false
      }
    ],
    throwOnError: true
  })
}

export function defaultData () {
  return {
    vote: BlogGlobals.vote,
    thumbUp: BlogGlobals.thumbUp,
    uid: BlogGlobals.currentUser,
    BlogGlobals
  }
}

export async function performVote (voteType) {
  if (voteType === this.vote) { this.vote = 0 } else { this.vote = voteType }

  if (voteType === 1 && this.vote === 0) { this.thumbUp-- } else if (voteType === 1 && this.vote === 1) { this.thumbUp++ }

  await axios.post('/api/blog/vote/' + this.BlogGlobals.blogID, {
    Type: this.vote
  })
}
