class About {
  constructor (container) {
    this.container = container
    this.header = document.querySelector('.header')
    this.video = container.querySelector('.video__player')
    this.video_play = container.querySelector('.about__button')
    this.video_container = container.querySelector('.ski__section-video')
    this.video_next = container.querySelector('.next__button')
    this.timing_current = container.querySelector('.video__current')
    this.timing_duration = container.querySelector('.video__duration')
    this.video_mute = container.querySelector('.video__mute')
    this.video_fill = container.querySelector('.video__seek-bar-fill')
    this.effect_pause = this.container.querySelector('.video__effect-play')
    this.effect_play = this.container.querySelector('.video__effect-pause')
    this.init()
  }
  init () {
    this.video_play.addEventListener('click', () => {
      this.video_container.classList.add('ski__section-video--visible')
      this.video.play()
      this.render()
      this.header.classList.add('header--hide')
    })
    this.video_next.addEventListener('click', () => {
      this.video.pause()
      this.header.classList.remove('header--hide')
      setTimeout(() => {
        this.video_container.classList.remove('ski__section-video--visible')
      }, 850)
    })
    this.video.addEventListener('loadeddata', () => {
      this.timing_duration.innerHTML = this.formatTime(this.video.duration)
    })
    this.video.addEventListener('click', () => {
      if (this.video.paused) {
        this.effect_play.classList.remove('video__effect-play--active')
        this.effect_pause.classList.add('video__effect-pause--active')
        this.video.play()
        this.render()
      } else {
        this.effect_pause.classList.remove('video__effect-pause--active')
        this.effect_play.classList.add('video__effect-play--active')
        this.video.pause()
      }
    })
    this.video.addEventListener('ended', () => {
      this.video_next.click()
    })
    this.video.addEventListener('timeupdate', () => {
      this.timing_current.innerHTML = this.formatTime(this.video.currentTime)
    })
    this.video_mute.addEventListener('click', () => {
      this.video.muted = !this.video.muted
      this.video_mute.classList.toggle('video__mute--off')
    })
  }
  render () {
    if (!this.video.paused) {
      let ratio = this.video.currentTime / this.video.duration
      this.video_fill.style.transform = `scaleX(${ratio})`
      window.requestAnimationFrame(this.render.bind(this))
    }
  }
  formatTime (time) {
    time = Math.round(time)
    let hours = Math.floor(time / 3600)
    let minutes = Math.floor((time - (hours * 3600)) / 60)
    let seconds = time - (hours * 3600) - (minutes * 60)
    hours = hours < 10 ? '0' + hours : hours
    minutes = minutes < 10 ? '0' + minutes : minutes
    seconds = seconds < 10 ? '0' + seconds : seconds
    return `<span class="minute">${minutes}</span><span class="second">${seconds}</span>`
  }
}

export default About
