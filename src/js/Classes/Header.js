class Header {
  constructor (header) {
    this.header = header
    this.toggle_item = header.querySelector('.header__toggle')
    /**
     * call toggleVisibilty on button toggle click
     */
    this.toggle_item.addEventListener('click', () => {
      this.toggleVisibility()
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
