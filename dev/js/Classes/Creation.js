export default class Creation {
  
  constructor () {
    this.sizeSelect = document.querySelector('.select-title')
    this.sizeList = document.querySelector('.select-content')
    this.sizeValues = document.querySelectorAll('.select-value')
    this.inputSize = document.querySelector('.select-title')
    this.skiContainer = document.querySelector('.content-left')
    this.skiFixation = document.querySelectorAll('.content-left-ski__fixation')
    this.fixations = document.querySelectorAll('.fixation')
    this.skiPlanches = document.querySelectorAll('.content-left-ski__planche')
    this.fixationValue = document.querySelector('.fixations-name-value')
    
    this.sizeList.style.display = 'none'
    
    this.scale = {
      '150': '.8',
      '160': '.9',
      '170': '1.05',
      '180': '1.1'
    }
    
    this.toggleSizeList()
    this.selectSize()
    this.selectBinding()
    this.reverseSki()
  }
  reverseSki () {
    ['touch', 'click'].forEach(e => this.skiContainer.addEventListener(e, () => {
      this.skiPlanches.forEach((ski) => {
        ski.classList.contains('visible') ? ski.classList.remove('visible') : ski.classList.add('visible')
        if (this.skiPlanches[1].style.zIndex == 1) {
          this.skiFixation.forEach(e => {
            e.style.transform = 'translateX(-500px)'
          })
        }
      })
    }))
  }
  toggleSizeList () {
    this.sizeSelect.addEventListener('click', () => {
      this.sizeList.style.display = this.sizeList.style.display === 'none' ? '' : 'none'
    })
  }
  selectBinding () {
    this.fixations.forEach((fix) => {
      fix.addEventListener('click', (e) => {
        if (this.skiPlanches[0].classList.contains('visible')) {
          this.fixations.forEach((f) => {
            !f.classList.contains('active') ? '' : f.classList.remove('active')
          })
          e.target.classList.add('active')
          this.fixationValue.innerText = e.target.dataset.name
          this.skiFixation.forEach((s) => {
            s.style.transform = 'translateX(-500px)'
          })
          this.skiFixation[e.target.dataset.index] ? this.skiFixation[e.target.dataset.index].style.transform = 'translateX(0px)' : ''
        }
      })
    })
  }
  selectSize () {
    this.sizeValues.forEach((e) => {
      e.addEventListener('click', (e) => {
        this.inputSize.innerHTML = e.target.innerText
        this.sizeList.style.display = 'none'
        
        this.skiContainer.style.transform = `scale(${this.scale[e.target.dataset.value]})`
      })
    })
  }
}
