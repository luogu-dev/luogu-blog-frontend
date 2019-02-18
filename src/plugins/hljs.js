/* eslint-disable */
import hljs from 'highlight.js/lib/highlight';
import $ from 'jquery'

let registeredLanguages = {};

window.hljs = hljs

export { hljs }
export async function renderAllCodeElements() {
  $('pre code').each(async (_, block) => {
    let matchLang = $(block).attr('class').match(/language-(\w+)/)
    if(!matchLang) {
      return
    }
    let lang = matchLang[1]
    if(!registeredLanguages.hasOwnProperty(lang)) {
      try {
        let langMod = await import(`highlight.js/lib/languages/${lang}`)
        hljs.registerLanguage(lang, langMod.default)
        registeredLanguages[lang] = true
      } catch(e) {
        console.error(`Failed to load language module: ${lang}`);
        console.error(e);
      }
    }
    hljs.highlightBlock(block)
  })
}
