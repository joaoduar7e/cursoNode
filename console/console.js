console.log('Exibindo')


//error message
console.error(new Error('Exibindo erro'))

//Array
const carros = ['Gol', 'Bmw', 'Golf', 'Astra']
console.table(carros)

//Objetos
const dados = {name: 'Joao', empresa:'Greenn'}
console.table(dados)

//Counts
console.count('processo')
console.count('processo')
console.count('teste')
console.log('Resetando o processo')
console.countReset('processo')
console.count('processo')
console.count('processo')
console.count('teste')

//Ver tempo de execução
console.time('contador')
//hora que parou de contar
console.timeEnd('contador')

//Assert, verifica se a condição está dando certo
console.assert(true, 'Faça algo')
console.assert(false, 'Ih, deu ruim')