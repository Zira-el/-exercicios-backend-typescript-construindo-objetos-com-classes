class Pessoa {
    constructor(
       private nome: string,
       private idade: number,
       private nomePai: string,
       private nomeMae: string
    ) { }

    saoIrmaos(pessoa: Pessoa) {
        return this.nomeMae === pessoa.nomeMae || this.nomePai === pessoa.nomePai
    }

    maisVelho(pessoa: Pessoa) {
        return this.idade > pessoa.idade
    }
}

const pessoa1 = new Pessoa('pessoa1', 30, 'mae1', 'pai1')
const pessoa2 = new Pessoa('pessoa2', 19, 'mae2', 'pai2')

console.log(pessoa1.saoIrmaos(pessoa2))
console.log(pessoa1.maisVelho(pessoa2))