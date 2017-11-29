import MobileSlider from './MobileSlider'

class Travel {
  constructor () {
    this.desktopStyle()
    this.initMobileSlider()
  }
  isMobile () {
    return ('ontouchstart' in document.documentElement)
  }
  /**
   * This function is used to init the slider
   */
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
  /**
   * This method is used to handle the style of the slider of the Travel section in desktop
   */
  desktopStyle () {
    const cards = document.querySelectorAll('.travel__card')
    if (!this.isMobile()) {
      const holder = document.querySelector('.travel__cards')
      holder.className += ' travel__cards--desktop'
      cards.forEach((el) => {
        el.className += ' travel__card--desktop'
      })
    } else {
      cards.forEach((el) => {
        el.className += ' travel__card--mobile'
      })
    }
  }
}

export default Travel
