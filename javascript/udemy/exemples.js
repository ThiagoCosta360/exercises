let x = '!'
console.log("Hello Word" + x)

x = 360
console.log(x)

const p1 = 1.0
const p2 = Number('2.0')
console.log(p1,p2)
console.log(Number.isInteger(p2))
console.log((20.4563).toFixed(2))
console.log(typeof Math)

const escola = "Cod3r"
console.log(escola.charAt(4))
console.log(escola.indexOf('C'))
console.log('Escola '.concat(escola).concat("!"))
console.log('Ana,Maria,Pedro'.split(","))

const nome = 'Rebeca'
const template = 
`
    Olá
    ${nome}!
`
console.log(template)
console.log(!!0)

let user = ''
console.log(user || 'Desconhecido')

const prod = {}
prod.nome = 'Galaxy'
prod['desconto'] = 0.5
console.log(prod)

const soma = (a, b) => { 
    return a + b
}

function Obj(nome) {
    this.nome = nome
    this.exec = function() {
        return "teste"
    }
}

const Obj1 = new Obj("Cadeira")
console.log(Obj1)

const pessoa2 = {
    nome2: 'Ana',
    idade2: 5,
    endereço:{
        logradouro: 'Nome da rua',
        número: 43
    }
}

const { nome2, idade2 } = pessoa2
console.log(nome2)

function rand({min = 0, max=1000}) {
     const valor = Math.random() * (max-min) + min
     return Math.floor(valor)
}

const obj2 = { max: 60, min: 50}
console.log(rand(obj2))

function soma2(){
    soma3 = 0
    for (i in arguments){
        soma3 += arguments[i]
    }
    return soma3
}

console.log(soma2(1, 2, 3, 4))