import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import 'font-awesome/css/font-awesome.min.css'
import './styles/bread.css'
import './styles/style.css'
import { getPosts } from 'scripts/article_list'

let searchBtn = document.querySelector('#search-btn')

searchBtn.addEventListener('click', function () {
  getPosts(1)
})
