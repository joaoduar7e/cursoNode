const { EventEmitter } = require('events');

const emitter = new EventEmitter();

const validaObjeto = (a) => {
    if (typeof a !== 'object') {
        emitter.emit('error', new Error('Tipo infomado inválido!'))
    } else {
        console.log('Objeto Válido!')
    }
}

emitter.addListener('error', (err) => {
    console.log(`Evento: ` + err.message)
})

let nome = 'joao'
let dados = { name: 'João', age: '21' }

validaObjeto(dados)