import MobileSlider from './MobileSlider'

class Travel {
  constructor () {
    console.log('init travel')

    this.initSlider()
  }

  initSlider () {
    const sliderElements = {
      slider: document.querySelector('.travel__container'),
      holder: document.querySelector('.travel__cards'),
      imgSlide: document.querySelector('.travel__mountain'),
      cards: document.querySelectorAll('.travel__card')
    }

    new MobileSlider(sliderElements)
  }
}

export default Travel
