import Router from './Classes/Router'
import Landing from './Classes/Landing'
import Header from './Classes/Header'
import Creation from './Classes/Creation'
import Visualization from './Classes/Visualization'
import About from './Classes/About'

window.addEventListener('touchstart', function () {
  window.IS_TOUCHSCREEN = true
})

new Router()
new Header(document.querySelector('.header'))
new About(document.querySelector('.section.ski'))
new Creation()
new Landing()

new Visualization(document.querySelector('.performance__visualization-svg'), 6, ['blabla', 'bloblo', 'blublues', 'blibluer', 'bluro', 'bloeuri'], [0.9, 0.75, 0.65, 0.7, 0.85, 0.6])

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./service-worker.js', {scope: '/'})
    .then(() => console.log('Service Worker registered successfully.'))
    .catch(error => console.log('Service Worker registration failed:', error))
}
