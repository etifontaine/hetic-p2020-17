import Landing from './Classes/Landing'
import Header from './Classes/Header'
import Rellax from 'rellax'

/* class Init {
  constructor () {
    console.log('JS init')
  }
} */

// const app = new Init()

new Header(document.querySelector('.header'))

let rellax = new Rellax('.rellax')

new Landing()
