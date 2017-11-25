class About {
  constructor (container) {
    this.container = container
    this.video_play = container.querySelector('.about__button')
    this.video_container = container.querySelector('.ski__section-video')
    this.video_next = container.querySelector('.next')

    this.video_play.addEventListener('click', () => {
      this.video_container.classList.add('ski__section-video--visible')
    })

    this.video_next.addEventListener('click', () => {
      setTimeout(() => {
        this.video_container.classList.remove('ski__section-video--visible')      
      }, 850)
    })
  }
}

export default About
