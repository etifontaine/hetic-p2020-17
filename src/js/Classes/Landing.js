/**
 * Landing object:
 * - Mountains parallax
 */
export default class Landing {
  constructor () {
    this.container = document.querySelector('.landing')
    this.title = this.container.querySelector('.landing__title-text')
    this.title_shadow = this.container.querySelector('.landing__title-shadow')
    this.width = window.innerWidth
    this.height = window.innerHeight
    this.next = this.container.querySelector('.next__button')
    /**
     * mouse object, contain:
     * - position x
     * - position y
     */
    this.mouse = {
      x: 0,
      y: 0
    }
    this.ease = 0.08
    /**
     * Create mountain object for each layer, contain:
     * - Positions cx, cy
     * - speed ratio
     * - DOM element
     */
    this.el_mountains = document.querySelectorAll('.landing__background-img img')
    this.mountains = []
    this.init()
  }
  init () {
    this.el_mountains.forEach((mountain, index) => {
      let obj = {
        cx: 0,
        cy: 0,
        speed: (this.el_mountains.length - index + 1) / this.el_mountains.length,
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
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      console.log('is on mobile')
      if (window.DeviceOrientationEvent) {
        window.addEventListener('deviceorientation', (event) => {
          this.mouse.x = event.alpha * 5
          this.mouse.y = event.beta * 5
        })
      }
    }
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
      mountain.el.style.transform = `translate3d(${mountain.cx}px, ${mountain.cy}px, 0)`
    })
    window.requestAnimationFrame(this.mountainDraw.bind(this))
  }
}
