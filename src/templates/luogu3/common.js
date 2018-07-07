import 'amazeui/dist/css/amazeui.css'
import 'amazeui'
import './styles/style.css'
import 'plugins/event_bus'
import $ from 'jquery'
import { getPosts } from 'scripts/article_list'

$('#search-btn').addEventListener('click', function () {
  getPosts(1)
})
