class Landing {
  constructor () {
    console.log('init landing')
    this.container = document.querySelector('.section-landing')
    this.title = document.querySelector('.landing__title-text')
    this.title_shadow = document.querySelector('.landing__title-shadow')
    this.title_bar = document.querySelector('.landing__title-bar')
    this.width = window.innerWidth
    this.height = window.innerHeight
    this.delta = 20

    this.mountains = document.querySelectorAll('.landing__background-img img')

    window.addEventListener('resize', () => {
      this.width = window.innerWidth
      this.height = window.innerHeight
    })

    window.addEventListener('mousemove', (e) => {
      if (e.pageY < this.height && !window.IS_TOUCHSCREEN) {
        let translateX = Math.round(((e.pageX - this.width / 2) / (this.width / 2)) * this.delta)
        let translateY = Math.round(((e.pageY - this.height / 2) / (this.height / 2)) * this.delta)
        this.mountains.forEach((mountain, index) => {
          let ratio = (this.mountains.length - index) / this.mountains.length
          mountain.style.transform = 'translateX(' + (translateX * ratio) + 'px) translateY(' + translateY * ratio + 'px)'
        })
      }
    })
  }
}

export default Landing
