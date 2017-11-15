/**
 * Landing object:
 * - Mountains parrallax
 * - ...
 */
class Landing {
  constructor () {
    console.log('init landing--')
    this.container = document.querySelector('.section-landing')

    this.title = document.querySelector('.landing__title-text')
    this.title_shadow = document.querySelector('.landing__title-shadow')

    this.width = window.innerWidth
    this.height = window.innerHeight
    // this.delta = 300
    this.ease = 0.08

    /**
     * mouse object, contain:
     * - position x
     * - position y
     */
    this.mouse = {
      x: 0,
      y: 0
    }

    /**
     * Create mountain object for each layer, contain:
     * - Positions cx, cy
     * - speed ratio
     * - DOM element
     */
    this.el_mountains = document.querySelectorAll('.landing__background-img img')
    this.mountains = []
    this.el_mountains.forEach((mountain, index) => {
      let obj = {
        cx: 0,
        cy: 0,
        speed: (this.el_mountains.length - index) / this.el_mountains.length,
        delta: ((this.el_mountains.length - index) / this.el_mountains.length) * 40,
        el: mountain
      }
      this.mountains.push(obj)
    })

    /**
     * update screen size on resize
     */
    window.addEventListener('resize', () => {
      this.width = window.innerWidth
      this.height = window.innerHeight
    })

    /**
     * Update mouse postions on mousemove
     */
    window.addEventListener('mousemove', (e) => {
      if (e.pageY < this.height && !window.IS_TOUCHSCREEN) {
        this.mouse.x = e.pageX
        this.mouse.y = e.pageY
      }
    })

    this.mountainDraw()
  }

  /**
   * Draw mountain layers in animation frame
   */
  mountainDraw () {
    this.mountains.forEach((mountain) => {
      let translateX = Math.round(((this.mouse.x - this.width / 2) / (this.width / 2)) * mountain.delta) * mountain.speed
      let translateY = Math.round(((this.mouse.y - this.height / 2) / (this.height / 2)) * mountain.delta) * mountain.speed

      mountain.cx += ((translateX - mountain.cx)) * this.ease
      mountain.cy += ((translateY - mountain.cy)) * this.ease
      mountain.el.style.transform = `translateX(${mountain.cx}px) translateY(${mountain.cy}px)`
    })

    // console.log('hello')
    window.requestAnimationFrame(this.mountainDraw.bind(this))
  }
}

export default Landing
