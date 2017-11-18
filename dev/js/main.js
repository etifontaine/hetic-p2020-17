import Router from './Classes/Router'
import Landing from './Classes/Landing'
import Header from './Classes/Header'

window.addEventListener('touchstart', function () {
  window.IS_TOUCHSCREEN = true
})

new Router()

new Header(document.querySelector('.header'))

new Landing()
