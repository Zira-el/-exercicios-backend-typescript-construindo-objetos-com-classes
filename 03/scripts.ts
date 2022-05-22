type Compra = {
    descricao: string
    valor: number
    quantidade: number
}

class Fatura {
    nome: string
    compra: Compra[] = []

    constructor(nome: string) {
        this.nome = nome
    }

    registrarCompra(compra: Compra) {
        this.compra.push(compra)
    }

    fecharFatura(): string {
        let total = 0, dadosFatura = ''
        this.compra.forEach(compra => {
            dadosFatura += `${compra.quantidade} - ${compra.descricao} (R$ ${(compra.valor / 100).toFixed(2)}) = R$ ${((compra.valor * compra.quantidade)/100).toFixed(2)}\n`
            total += (compra.valor * compra.quantidade)
        });

        return `Cliente: ${this.nome}\n\n` + `${dadosFatura}\n` + `${(total / 100).toFixed(2)}`
    }
}

const fatura = new Fatura('João')
fatura.registrarCompra({
    descricao: 'Camisa Preta',
    valor: 5990,
    quantidade: 2
})

fatura.registrarCompra({
    descricao: 'Camisa Azul',
    valor: 7900,
    quantidade: 1
})

console.log(fatura.fecharFatura())