/**
 * Loader Class
 */
import axios from 'axios'

export default class Loader {
  constructor () {
    this.elementsToLoad = [].slice.call(
      document.querySelectorAll('[data-preload]')
    )
    this.loader = document.querySelector('.loader-2')
    this.loaderPourcentage = document.querySelector('.loader-pourcentage')
    this.globalProgress = 0
    this.requests = []
    this.init()
  }
  init () {
    this.elementsToLoad.forEach(element => {
      this.requests.push({
        element,
        type: 'src',
        progress: 0
      })
    })
    this.requests.forEach((request, index) => {
      axios.get(request.element.getAttribute(request.type), {
        onDownloadProgress: e => {
          const progress = Math.floor(e.loaded / e.total * 100)
          this.updateLoader(index, progress)
        }
      })
    })
  }
  updateLoader (index, progress) {
    this.requests[index].progress = progress
    const total = this.requests.reduce(
      (value, request) => value + request.progress,
      0
    )
    this.globalProgress = Math.floor(total / this.requests.length)
    this.loader.style.clipPath = `inset(${100 - this.globalProgress}% 0 0 0)`
    this.loaderPourcentage.innerHTML = this.globalProgress + '%'
    if (this.globalProgress === 100) {
      this.loader.parentElement.parentElement.style.transform = 'translateY(-100vh)'
    }
  }
}
