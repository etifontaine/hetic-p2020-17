import axios from 'axios'

class Loader {
    constructor (container) {
        this.srcElements = [].slice.call(
            document.querySelectorAll('[data-preload]')
        )
        this.loader = document.querySelector('.loader-2')
        this.eventsList = ['progress', 'complete']
        this.progressEvents = []
        this.completeEvents = []
        this.globalProgress = 0
        this.requests = []

        this.init()

    
    }
    init () {
          this.srcElements.forEach(element => {
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
          
          this.updateRequestProgress(index, progress)
        }
      })
    })
  
    }
    /**
   * updateRequestProgress()
   * @param {number} index - Index of the request in the requests array
   * @param {number} progress - Percentage of completion of the request
   */
  updateRequestProgress(index, progress) {
    this.requests[index].progress = progress;
    const total = this.requests.reduce(
      (value, request) => value + request.progress,
      0
    );

    this.globalProgress = Math.floor(total / this.requests.length);

    this.loader.style.clipPath = `inset(${100 - this.globalProgress}% 0 0 0)`
    
    if (this.globalProgress === 100) {
        this.loader
      } else {
        console.log('encours')
      }
  }
    
  }
  
  export default Loader
  