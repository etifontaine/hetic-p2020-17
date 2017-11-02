class Landing {
  constructor () {
    console.log('init landing')
    this.title = document.querySelector('.landing-title h1')

    window.addEventListener('deviceorientation', (e) => {
      this.title.style.transform = 'rotateX(' + e.beta + 'deg) rotateY(' + e.gamma + 'deg)'
    })
  }
}

export default Landing
