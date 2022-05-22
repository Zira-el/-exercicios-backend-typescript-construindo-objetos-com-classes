class Lamp {
    private state: boolean = false
    private watts: number

    constructor(watts: number) {
        this.watts = watts
    }

    on() {
        this.state = true
    }

    off() {
        this.state = false
    }

    pot(): number {
        return this.watts
    }
}

const lamp = new Lamp(40)
lamp.on()
console.log(lamp)
lamp.off()
console.log(lamp)
console.log(lamp.pot())