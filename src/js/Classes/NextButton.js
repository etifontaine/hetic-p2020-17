class NextButton {
  constructor (container) {
    this.container = container
    this.button = container.querySelector('.next__button')
    this.svg = container.querySelector('.next__svg')
    this.line = container.querySelector('.next__svg-line')
    this.container.addEventListener('mouseenter', () => {
      this.isOver = true
      this.ease = 1.5
    })
    this.container.addEventListener('mouseleave', () => {
      this.isOver = false
      this.ease = 0.75
    })
    this.button.addEventListener('click', () => {
      this.isCliked = true
      setTimeout(() => {
        this.isCliked = false
      }, 850)
    })
    this.mouse = {
      x: 0,
      y: 0
    }
    this.container.addEventListener('mousemove', (e) => {
      this.mouse.x = e.pageX - this.positions.left
      this.mouse.y = e.pageY - this.positions.top
    })
    this.button.x = 0
    this.button.y = 0
    window.addEventListener('resize', () => {
      this.positions.left = this.video_skip_container.offsetLeft
      this.positions.top = this.video_skip_container.offsetTop
    })
    this.init()
    this.render()
  }
  init () {
    this.positions = {
      left: this.container.offsetLeft,
      top: this.container.offsetTop,
      width: this.container.offsetWidth,
      height: this.container.offsetHeight
    }
    this.svg.setAttribute('width', this.positions.width)
    this.svg.setAttribute('height', this.positions.height)
    this.svg.setAttribute('viewBox', `0 0 ${this.positions.width} ${this.positions.height} `)
    this.ease = 0.75
  }
  render () {
    let translateX = 0
    let translateY = 0
    if (this.isCliked) {
      translateX = 0
      translateY = this.positions.height / 1.5
    } else if (this.isOver) {
      translateX = ((this.mouse.x - this.positions.width / 2) / (this.positions.width / 2) * (this.positions.width - 50) / 2)
      translateY = ((this.mouse.y - this.positions.height / 2) / (this.positions.height / 2) * (this.positions.width - 50) / 2)
    }
    this.button.x += Math.round(((translateX - this.button.x)) * this.ease) / 10
    this.button.y += Math.round(((translateY - this.button.y)) * this.ease) / 10
    this.button.style.transform = `translateX(${this.button.x}px) translateY(${this.button.y}px)`
    this.line.setAttribute('x1', this.button.x + this.positions.width / 2)
    this.line.setAttribute('y1', this.button.y + this.positions.height / 2 + 25)
    this.line.setAttribute('x2', this.positions.width / 2)
    this.line.setAttribute('y2', this.positions.height + 50)
    let ratio = 1 - (this.button.y + this.positions.height / 2) / (this.positions.height)
    this.line.setAttribute('opacity', ratio)
    window.requestAnimationFrame(this.render.bind(this))
  }
}

export default NextButton
