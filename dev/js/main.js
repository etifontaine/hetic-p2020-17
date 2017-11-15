import Landing from './Classes/Landing'
import Header from './Classes/Header'

/* class Init {
  constructor () {
    console.log('JS init')
  }
} */

// const app = new Init()

window.addEventListener('touchstart', function () {
  window.IS_TOUCHSCREEN = true
})

new Header(document.querySelector('.header'))

new Landing()
