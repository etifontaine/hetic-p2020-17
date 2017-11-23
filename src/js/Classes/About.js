class About {
  constructor (container) {
    this.container = container
    this.video_play = container.querySelector('.about__button')
    
    this.video_skip_container = container.querySelector('.video__skip-container')
    this.video_skip_btn = container.querySelector('.video__skip-button')
    this.video_skip_line = container.querySelector('.video__skip-line')

    this.video_container = container.querySelector('.ski__section-video')

    this.video_play.addEventListener('click', () => {
      this.video_container.classList.toggle('ski__section-video--visible')
    })


  }
}

export default About
