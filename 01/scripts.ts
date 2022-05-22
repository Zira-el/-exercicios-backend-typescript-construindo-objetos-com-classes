class Calculator {
    private number1: number
    private number2: number

    constructor(number1: number, number2: number) { 
        this.number1 = number1
        this.number2 = number2
    }

    somar(): number {
        return this.number1 + this.number2
    }

    subtrair(): number {
        return this.number1 - this.number2
    }

    multiplicar(): number {
        return this.number1 * this.number2
    }

    dividir(): number {
        return this.number1 / this.number2
    }
}

const calculator = new Calculator(10, 5)

console.log(calculator.somar())
console.log(calculator.subtrair())
console.log(calculator.multiplicar())
console.log(calculator.dividir())
