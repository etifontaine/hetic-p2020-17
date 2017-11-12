class Header {
  constructor (header) {
    this.header = header
    this.btn_toggle = header.querySelector('.header-toggle')
    this.btn_toggle.addEventListener('click', () => {
      this.toggle()
    })
    console.log('init header')
    window.addEventListener('scroll', (e) => {
      if (window.scrollY > 80) {
        this.header.classList.add('header--background')
      } else {
        this.header.classList.remove('header--background')
      }
    })
  }
  toggle () {
    this.header.classList.toggle('header--show')
  }
}

export default Header
