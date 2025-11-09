export default class EventEmitter {
    constructor(){
        this.callbacks = {}
        this.callbacks.base = {}
    }

    //Listen to one or more events names
    on(_names, callback) {
        const names = _names.split(' ')
        for (const name of names) {
            if (!this.callbacks.base[name]) {
                this.callbacks.base[name] = []
            }
            this.callbacks.base[name].push(callback)
        }
    }
    //remove listener
    off(_names) {
        const names = _names.split(' ')
        for (const name of names) {
            if (!this.callbacks.base[name]) continue
                delete this.callbacks.base[name] 
        }
    }

    //trigger events
    trigger(_name, _args) {
        const names = _name.split(' ')
        for (const name of names) {
            const callbacks = this.callbacks.base[name] 
            if (callbacks) {
                callbacks.forEach((cb) => cb(_args))
            }
        }
    }
}
