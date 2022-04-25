const EventEmitter = require('events');

class Evento extends EventEmitter {}
const meuEvento = new Evento();

// É continuo, cod executado pode ser chamado quantas vezes precisar
// Promise ele exceuta mas encerra o processamento

// on cria o evento - assinante
meuEvento.on('seguranca', (x,y)=>{
    console.log(`Executando o evento de 'segurança': ${x} ${y}`)
})

// dispara o evento - emissor
meuEvento.emit('seguranca','userAdmin', 'Alterou Salário')


meuEvento.on('encerrar',(dados)=>{
    console.log(`Assinante ${dados}, cancelou o plano!`)
})

meuEvento.emit('encerrar', 'João');