import EventEmitter from './EventEmitter.js'

export default class Sizes extends EventEmitter{

    constructor(){
        super()
        this.width = window.innerWidth
        this.height = window.innerHeight
        this.pixelRatio = Math.min(window.devicePixelRatio, 2)

        // Listener to window sizes
        window.addEventListener('resize', () => {
            this.width = window.innerWidth
            this.height = window.innerHeight
            this.pixelRatio = Math.min(window.devicePixelRatio, 2)
            //console.log('Width: ${this.width}')
            //console.log('Height: ${this.height}')
            //console.log('Pixel Ratio: ${this.pixelRatio}')
            this.trigger('resize')
        }
        )}
}