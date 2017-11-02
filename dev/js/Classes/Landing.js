class Landing {
  constructor() {
    console.log('init landing')
    this.title = document.querySelector('.landing-title h1')

    window.addEventListener('deviceorientation', (e) => {
      this.title.style.transform = 'rotateX(' + Math.cbrt(e.beta * 100) + 'deg) rotateY(' + Math.cbrt(e.gamma * 100) + 'deg)'
    })
  }
}

export default Landing
