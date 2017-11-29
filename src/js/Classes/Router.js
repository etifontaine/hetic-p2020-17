class Router {
  constructor () {
    this.url = window.location.href.split('#')[1]
    this.container = document.querySelector('.container')
    this.sections = this.container.querySelectorAll('.section')
    this.next_items = this.container.querySelectorAll('.next__button')
    this.header_items = document.querySelectorAll('.header__item')

    /**
     * define current section
     */
    switch (this.url) {
      case 'home':
        this.currentIndex = 0
        break
      case 'ski':
        this.currentIndex = 1
        break
      case 'performance':
        this.currentIndex = 2
        break
      case 'histoire':
        this.currentIndex = 3
        break
      case 'personnaliser':
        this.currentIndex = 4
        break
      default:
        this.currentIndex = 0
    }

    this.changeSection(this.currentIndex)
    setTimeout(() => {
      this.container.style.transition = 'transform .85s ease-in-out'
    }, 500)

    /**
     * change section on next buttons click
     */
    this.next_items.forEach((next) => {
      next.addEventListener('click', () => {
        let index = this.currentIndex + 1
        this.changeSection(index)
      })
    })

    /**
     * change section on header nav click
     */
    this.header_items.forEach((button, index) => {
      button.addEventListener('click', () => {
        this.changeSection(index)
      })
    })
  }

  /**
   * update section, fade-out previous section, fade-in new section
   */
  changeSection (newIndex) {
    this.sections[this.currentIndex].classList.remove('section--fade-in')
    this.sections[this.currentIndex].classList.add('section--fade-out')
    this.header_items[this.currentIndex].classList.remove('header__item--active')

    /**
     * update index
     */
    this.currentIndex = newIndex

    this.header_items[this.currentIndex].classList.add('header__item--active')
    this.sections[this.currentIndex].classList.remove('section--fade-out')
    this.sections[this.currentIndex].classList.add('section--fade-in')
    this.container.style.transform = `translateY(-${(this.currentIndex * 100)}vh)`

    window.location.href = `#${this.getSectionName(this.currentIndex)}`
  }

  /**
   * return section name from index
   */
  getSectionName (index) {
    switch (index) {
      case 0:
        return 'home'
      case 1:
        return 'ski'
      case 2:
        return 'performance'
      case 3:
        return 'histoire'
      case 4:
        return 'personnaliser'
      default:
        return 'home'
    }
  }
}

export default Router
