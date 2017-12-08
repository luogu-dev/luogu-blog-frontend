import queryParams from 'plugins/query_string'
import queryString from 'query-string'
import _ from 'lodash'

export function defaultData () {
  return {
    keyword: _.get(queryParams, 'keyword', '')
  }
}

export function defaultMounted () {
  window.eventBus.$on('search', keyword => {
    this.keyword = keyword
  })
}

export function listPageSearch () {
  window.eventBus.$emit('search', this.keyword)
}

export function redirectSearch () {
  window.location.href = '.#' + queryString.stringify(_.pickBy({
    keyword: this.keyword
  }, _.identity))
}
