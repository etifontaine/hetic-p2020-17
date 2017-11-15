class Header {
  constructor (header) {
    console.log('init header')    
    this.header = header
    this.items = this.header.querySelectorAll('.header__item')
    this.items_next = document.querySelectorAll('.next__button')
    this.sections = document.querySelectorAll('.section')
    this.btn_toggle = header.querySelector('.header__toggle')
    this.current_section = 0

    /**
     * select section on header nav click
     */
    this.items.forEach((button, index) => {
      button.addEventListener('click', () => {
        this.items[this.current_section].classList.remove('header__item--active')
        this.current_section = index
        this.items[this.current_section].classList.add('header__item--active')
      })
    })

    /**
     * change section on next buttons click
     */
    this.items_next.forEach((button, index) => {
      button.addEventListener('click', () => {
        console.log(index)
      })
    })

    /**
     * toggle menu visibilty on mobile
     */
    this.btn_toggle.addEventListener('click', () => {
      this.toggleVisibility()
    })

    /**
     * Display header background if needed
     */
    window.addEventListener('scroll', (e) => {
      if (window.scrollY > 80) {
        this.header.classList.add('header--background')
      } else {
        this.header.classList.remove('header--background')
      }
    })
  }
  toggleVisibility () {
    this.header.classList.toggle('header--show')
  }
}

export default Header
