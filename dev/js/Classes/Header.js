class Header {
  constructor (header) {
    console.log('init header')    
    this.header = header
    this.items = this.header.querySelectorAll('.header__item')
    this.sections = document.querySelectorAll('.section')
    this.btn_toggle = header.querySelector('.header__toggle')
    this.current_section = 0

    this.items.forEach((button, index) => {
      button.addEventListener('click', () => {
        this.items[this.current_section].classList.remove('header__item--active')
        this.current_section = index
        this.items[this.current_section].classList.add('header__item--active')
      })
    })

    this.btn_toggle.addEventListener('click', () => {
      this.toggle()
    })

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
