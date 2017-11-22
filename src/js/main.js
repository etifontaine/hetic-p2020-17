import Router from './Classes/Router'
import Landing from './Classes/Landing'
import Header from './Classes/Header'
import Creation from './Classes/Creation'
import Visualization from './Classes/Visualization'

window.addEventListener('touchstart', function () {
  window.IS_TOUCHSCREEN = true
})

new Router()
new Header(document.querySelector('.header'))
new Creation()
new Landing()

const viz = new Visualization(document.querySelector('.performance__visualization-svg'), 6, ['blabla', 'bloblo', 'blublues', 'blibluer', 'bluro', 'bloeuri'], [0.85, 0.75, 0.65, 0.7, 0.85, 0.6])

console.log(viz)
