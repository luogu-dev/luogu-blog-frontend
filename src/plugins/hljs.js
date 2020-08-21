import hljs from 'highlight.js/lib/core'
import $ from 'jquery'

const registeredLanguages = {}
const ensureLanguageRegistered = async lang => {
  if (!registeredLanguages[lang]) {
    try {
      const { default: langMod } = await import(`highlight.js/lib/languages/${lang}`)
      hljs.registerLanguage(lang, langMod)
      registeredLanguages[lang] = true
    } catch (e) {
      console.error(`Failed to load language module: ${lang}`)
      console.error(e)
      throw e
    }
  }
}

window.hljs = hljs

export { hljs }
export async function renderAllCodeElements () {
  await ensureLanguageRegistered('c-like')
  $('pre code').each(async (_, block) => {
    const matchLang = $(block).attr('class').match(/language-(\w+)/)
    if (!matchLang) {
      return
    }
    const lang = matchLang[1]
    await ensureLanguageRegistered(lang)
    hljs.highlightBlock(block)
  })
}
