export default class MobileSlider {
  constructor (slider, isMobile) {
    this.sliderElements = slider
    this.isMobile = isMobile
    this.touchstartx = undefined
    this.touchmovex = undefined
    this.movex = undefined
    this.longTouch = undefined
    this.index = 0
    this.isMobile ? this.sliderElements.controllers.className += ' travel__controllers--mobile' : this.initControllers()
    this.init()
  }
  /**
   * Get the size of the user window
   * @returns {number}
   */
  slideWidth () {
    return this.sliderElements.slider.clientWidth
  }
  /**
   * Handle swip on slider
   */
  init () {
    this.sliderElements.holder.addEventListener('touchstart', (event) => {
      this.start(event)
    })
    this.sliderElements.holder.addEventListener('touchmove', (event) => {
      this.move(event)
    })
    this.sliderElements.holder.addEventListener('touchend', (event) => {
      this.end(event)
    })
  }
  start (event) {
    // Test for flick.
    this.longTouch = false
    setTimeout(() => {
      this.longTouch = true
    }, 250)
    // Get the original touch position.
    this.touchstartx = event.touches[0].pageX
    this.removeClassAnimate()
    this.removeClassMobile()
  }
  move (event) {
    // Continuously return touch position.
    this.touchmovex = event.touches[0].pageX
    // Calculate distance to translate holder.
    this.movex = this.index * this.slideWidth() + (this.touchstartx - this.touchmovex)
    // Defines the speed the images should move at.
    let panx = this.movex / 6
    if (this.movex < (this.slideWidth() * 2)) { // Makes the holder stop moving when theno more content.
      this.sliderElements.holder.style.transform = `translate(-${this.movex}px)`
    }
    if (panx < ((this.slideWidth() * 2) / 6)) { // Corrects an edge-case problem wherbackground image moves without the container moving.
      this.sliderElements.imgSlide.style.transform = `translate(-${panx}px)`
    }
  }
  end () {
    // Calculate the distance swiped.
    const absMove = Math.abs(this.index * this.slideWidth() - this.movex)
    // Calculate the index. All other calculations are based on the index.
    if (absMove > this.slideWidth() / 2 || this.longTouch === false) {
      if (this.movex > this.index * this.slideWidth() && this.index < 2) {
        this.index++
      } else if (this.movex < this.index * this.slideWidth() && this.index > 0) {
        this.index--
      }
    }
    // Move and animate the elements.
    this.animate()
    this.hideButtons(this.index)
  }
  animate () {
    this.addClassMobile()
    this.sliderElements.holder.className += ' animate'
    this.sliderElements.holder.style.transform = `translate(-${this.index * this.slideWidth()}px)`
    this.sliderElements.imgSlide.className += ' animate'
    this.sliderElements.imgSlide.style.transform = 'translate(-' + (this.index * this.slideWidth() / 6) + 'px)'
  }
  initControllers () {
    const that = this
    this.sliderElements.prev.addEventListener('click', () => {
      if (that.index > 0) {
        that.removeClassAnimate()
        that.index--
        that.hideButtons(that.index)
        that.animate()
      }
    })
    this.sliderElements.next.addEventListener('click', () => {
      if (that.index < that.sliderElements.cards.length - 1) {
        that.removeClassAnimate()
        that.index++
        that.hideButtons(that.index)
        that.animate()
      }
    })
  }
  removeClassAnimate () {
    // The movement gets all janky if there's a transition on the elements.
    if (document.querySelector('.animate')) {
      document.querySelectorAll('.animate').forEach((element) => {
        element.classList.remove('animate')
      })
    }
  }
  removeClassMobile () {
    // The movement gets all janky if there's a transition on the elements.
    if (document.querySelector('.travel__card--mobile')) {
      document.querySelectorAll('.travel__card--mobile').forEach((element) => {
        element.classList.remove('travel__card--mobile')
      })
    }
  }
  addClassMobile () {
    if (this.isMobile) {
      this.sliderElements.cards.forEach((el) => {
        el.className += ' travel__card--mobile'
      })
    }
  }
  hideButtons (index) {
    if (index === 1) {
      this.sliderElements.controllers.classList.remove('travel__controllers--start')
      this.sliderElements.controllers.classList.remove('travel__controllers--end')
    } else if (index === 0) {
      this.sliderElements.controllers.className += ' travel__controllers--start'
    } else {
      this.sliderElements.controllers.className += ' travel__controllers--end'
    }
  }
}
