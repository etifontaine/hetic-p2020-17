class Travel {
  constructor () {
    console.log('init travel')

    if (navigator.msMaxTouchPoints) {
      document.querySelector('.travel__container').addClass('travel__container--ms-touch')

      document.querySelector('.travel__container').addEventListener('scroll', () => {
        document.querySelector('.travel__mountain').style.transform = 'translate(' + (document.querySelector('.travel__mountain').scrollLeft / 6) + 'px)'
      })
    } else {
      const slider = {
        el: {
          slider: document.querySelector('.travel__container'),
          holder: document.querySelector('.travel__cards'),
          imgSlide: document.querySelector('.travel__mountain'),
          cards: document.querySelectorAll('.travel__card')
        },
        slideWidth: function () {
          return document.querySelector('.travel__container').clientWidth
        },
        touchstartx: undefined,
        touchmovex: undefined,
        movex: undefined,
        index: 0,
        longTouch: undefined,
        init: function () {
          this.bindUIEvents()
        },
        bindUIEvents: function () {
          this.el.holder.addEventListener('touchstart', (event) => {
            slider.start(event)
          })

          this.el.holder.addEventListener('touchmove', (event) => {
            slider.move(event)
          })

          this.el.holder.addEventListener('touchend', (event) => {
            slider.end(event)
          })
        },
        start: function (event) {
          // Test for flick.
          this.longTouch = false
          const that = this
          setTimeout(function () {
            that.longTouch = true
          }, 250)

          // Get the original touch position.
          this.touchstartx = event.touches[0].pageX

          // The movement gets all janky if there's a transition on the elements.
          if (document.querySelector('.animate')) {
            document.querySelectorAll('.animate').forEach((element) => {
              element.classList.remove('animate')
            })
          }
        },
        move: function (event) {
          // Continuously return touch position.
          this.touchmovex = event.touches[0].pageX
          // Calculate distance to translate holder.
          this.movex = this.index * this.slideWidth() + (this.touchstartx - this.touchmovex)
          // Defines the speed the images should move at.
          var panx = this.movex / 6
          if (this.movex < (this.slideWidth() * 2)) { // Makes the holder stop moving when there is no more content.
            this.el.holder.style.transform = 'translate(-' + this.movex + 'px)'
          }
          if (panx < ((this.slideWidth() * 2) / 6)) { // Corrects an edge-case problem where the background image moves without the container moving.
            this.el.imgSlide.style.transform = 'translate(-' + panx + 'px)'
          }
        },
        end: function (event) {
          // Calculate the distance swiped.
          let absMove = Math.abs(this.index * this.slideWidth() - this.movex)
          // Calculate the index. All other calculations are based on the index.
          if (absMove > this.slideWidth() / 2 || this.longTouch === false) {
            if (this.movex > this.index * this.slideWidth() && this.index < 2) {
              this.index++
            } else if (this.movex < this.index * this.slideWidth() && this.index > 0) {
              this.index--
            }
          }
          // Move and animate the elements.
          this.el.holder.className += ' animate'
          this.el.holder.style.transform = 'translate(-' + this.index * this.slideWidth() + 'px)'
          this.el.imgSlide.className += ' animate'
          this.el.imgSlide.style.transform = 'translate(-' + (this.index * this.slideWidth() / 6) + 'px)'
        }
      }

      slider.init()
    }
  }
}

export default Travel
