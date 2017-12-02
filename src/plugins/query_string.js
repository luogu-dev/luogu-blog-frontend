import queryString from 'query-string'

const params = queryString.parse(location.hash)

export default params
