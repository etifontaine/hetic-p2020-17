import Header from './Classes/Header'
import Creation from './Classes/Creation'
import Rellax from 'rellax'

require('smoothscroll-polyfill').polyfill()

/* class Init {
  constructor () {
    console.log('JS init')
  }
} */

// const app = new Init()

new Header(document.querySelector('.header'))

new Rellax('.rellax')

new Creation()
