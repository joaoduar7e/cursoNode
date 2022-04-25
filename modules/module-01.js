console.log('Executando module-01.js')

oculta = ()=>{
    console.log('Executando função oculta')
}

// module.exports. para ficar disponivel como módulo em outros arquivos
// module.exports.executa = ()=>{
//     console.log('Executando função executa')
// }

//REPL -> Executa o node no terminal
// ./ inclui um módulo que não é nativo

executa = ()=>{
    console.log('Executando função executa')
}

welcome = `Bem vindo ao module-01.js`

module.exports = {executa, welcome}
