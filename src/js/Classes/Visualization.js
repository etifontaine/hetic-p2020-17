class Visualization {
  constructor (container, edgeNumber = 6, content = [], value = []) {
    this.container = container
    this.edgeNumber = edgeNumber
    this.content = content
    this.value = value

    window.addEventListener('resize', () => {
      this.init()
    })

    this.init()
    this.drawBackground()
    this.drawPolygon()
    this.drawText()
  }

  init () {
    this.width = this.container.parentNode.getBoundingClientRect().width
    this.height = this.container.parentNode.getBoundingClientRect().height

    this.container.setAttribute('viewBox', '0 0 ' + this.width + ' ' + this.height)
    this.container.setAttribute('width', this.width)
    this.container.setAttribute('height', this.height)
  }

  drawBackground () {
    this.container.appendChild(this.createCircle('circle-main', this.width / 2.5))
    this.container.appendChild(this.createCircle('circle', this.width / 3))
    this.container.appendChild(this.createCircle('circle', this.width / 4))

    for (let i = 0; i < this.edgeNumber; i++) {
      this.container.appendChild(this.createLine(i))    
    }
  }

  createCircle (name, width) {
    let circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
    circle.setAttributeNS(null, 'cx', this.width / 2)
    circle.setAttributeNS(null, 'cy', this.height / 2)
    circle.setAttributeNS(null, 'r', width)
    circle.setAttributeNS(null, 'class', name)

    return circle
  }

  createLine (index) {
    let line = document.createElementNS('http://www.w3.org/2000/svg', 'line')
    line.setAttribute('x1', this.width / 2)
    line.setAttribute('y1', this.height / 2)
    line.setAttribute('x2', (this.width / 2) + (this.width / 2.5) * Math.cos((index + 0.5) * 2 * Math.PI / this.edgeNumber))
    line.setAttribute('y2', (this.height / 2) + (this.height / 2.5) * Math.sin((index + 0.5) * 2 * Math.PI / this.edgeNumber))

    return line
  }

  drawPolygon () {
    this.group = document.createElementNS('http://www.w3.org/2000/svg', 'g')
    this.container.appendChild(this.group)

    this.group.appendChild(this.createPolygon('shadow'))
    this.group.appendChild(this.createPolygon('main'))
  }

  createPolygon (name) {
    let polygon = document.createElementNS('http://www.w3.org/2000/svg', 'polygon')

    let points = ''
    for (let i = 0; i < this.edgeNumber; i++) {
      points += (this.width / 2) + ((this.width / 2.5) * this.value[i]) * Math.cos((i + 0.5) * 2 * Math.PI / this.edgeNumber)
      points += ','
      points += (this.width / 2) + ((this.width / 2.5) * this.value[i]) * Math.sin((i + 0.5) * 2 * Math.PI / this.edgeNumber)
      points += ' '
    }

    polygon.setAttributeNS(null, 'points', points)
    polygon.setAttributeNS(null, 'class', name)
    if (name === 'shadow') {
      polygon.setAttributeNS(null, 'filter', 'url(#shadow)')
    }

    return polygon
  }

  drawText () {
    for (let i = 0; i < this.edgeNumber; i++) {
      this.container.parentNode.appendChild(this.createText(i))
    }
  }

  createText (index) {
    let text = document.createElement('div')

    let mX = (Math.round(Math.cos((index + 0.5) * 2 * Math.PI / (this.edgeNumber)) * 1000) / 1000)
    let mY = (Math.round(Math.sin((index + 0.5) * 2 * Math.PI / (this.edgeNumber)) * 1000) / 1000)

    let x = (this.width / 2) + (this.width / 2.3) * Math.cos((index + 0.5) * 2 * Math.PI / this.edgeNumber) + mX * 40
    let y = (this.width / 2) + (this.width / 2.3) * Math.sin((index + 0.5) * 2 * Math.PI / this.edgeNumber) + mY * 5

    text.style.transform = `translate(${x}px, ${y}px)`
    text.className = 'performance__visualization-text'
    text.textContent = this.content[index]

    if (mX > 0) {
      text.style.textAlign = 'left'
    }
    else if (mX < 0) {
      text.style.textAlign = 'right'
    }

    return text
  }
}

export default Visualization
