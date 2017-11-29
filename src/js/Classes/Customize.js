class Customize {
  constructor (container) {
    this.container = container
    this.show_back = container.querySelector('.creation__display__back')
    this.ski_container = container.querySelector('.creation__ski')
    this.button_fixs = container.querySelectorAll('.creation__fixations__item')
    this.price = container.querySelector('.creation__price')
    this.previous_index = 0

    this.fix = [
      [document.querySelectorAll('.fix-1')],
      [document.querySelectorAll('.fix-2')],
      [document.querySelectorAll('.fix-3')]
    ]

    this.button_fixs.forEach((button, index) => {
      button.addEventListener('click', () => {
        if (index !== this.previous_index) {
          this.price.textContent = button.dataset.price + '€'
          button.classList.add('active')
          this.button_fixs[this.previous_index].classList.remove('active')
          this.button_fixs[index].classList.add('active')

          this.fix[this.previous_index][0].forEach(item => {
            item.classList.remove('active')
          })
          this.fix[index][0].forEach(item => {
            item.classList.add('active')
          })

          this.previous_index = index
        }
      })
    })

    this.show_back.addEventListener('click', () => {
      this.ski_container.classList.toggle('show-back')
      if (this.ski_container.classList.contains('show-back')) {
        this.show_back.textContent = 'voir l\'avant'
      } else {
        this.show_back.textContent = 'voir l\'arrière'
      }
    })
  }
}

export default Customize
