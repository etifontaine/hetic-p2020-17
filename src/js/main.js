import Router from './Classes/Router'
import Landing from './Classes/Landing'
import Header from './Classes/Header'
import Creation from './Classes/Creation'
import Visualization from './Classes/Visualization'
import About from './Classes/About'
import NextButton from './Classes/NextButton'

window.addEventListener('touchstart', function () {
  window.IS_TOUCHSCREEN = true
})

new Router()
new Header(document.querySelector('.header'))
const test = new About(document.querySelector('.section.ski'))

console.log(test)

new Creation()
new Landing()

const nextButtons = document.querySelectorAll('.next')

nextButtons.forEach(button => {
  new NextButton(button)
})

new Visualization(document.querySelector('.performance__visualization-svg'), 6, ['stabilité', 'transmission', 'polyvalence', 'freeride', 'réactivité', 'portance'], [0.9, 0.75, 0.65, 0.90, 0.85, 0.6])
