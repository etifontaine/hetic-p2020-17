class Header {
  constructor (header) {
    this.header = header
    this.toggle_item = header.querySelector('.header__toggle')
    this.nav_items = header.querySelectorAll('.header__item ')

    /**
     * call toggleVisibilty on button toggle click
     */
    this.toggle_item.addEventListener('click', () => {
      this.toggleVisibility()
    })

    /**
     * hide menu on nav items click
     */
    this.nav_items.forEach(item => {
      item.addEventListener('click', () => {
        this.header.classList.remove('header--show')
      })
    })
  }
  /**
   * toggle nav visibilty on mobile device
   */
  toggleVisibility () {
    this.header.classList.toggle('header--show')
  }
}

export default Header
