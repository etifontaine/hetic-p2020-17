import MobileSlider from './MobileSlider'

class Travel {
  constructor () {
    console.log('init travel')

    this.initMobileSlider()
  }

  isMobile () {
    return ('ontouchstart' in document.documentElement)
  }

  initMobileSlider () {
    const sliderElements = {
      slider: document.querySelector('.travel__container'),
      holder: document.querySelector('.travel__cards'),
      imgSlide: document.querySelector('.travel__mountain'),
      cards: document.querySelectorAll('.travel__card'),
      controllers: document.querySelector('.travel__controllers'),
      prev: document.querySelector('.controllers__prev'),
      next: document.querySelector('.controllers__next')
    }

    new MobileSlider(sliderElements, this.isMobile())
  }
}

export default Travel
