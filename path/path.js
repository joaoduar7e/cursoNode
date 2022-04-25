const path = require('path');

// (le nome do arquivo)
console.log('basename', path.basename('/home/user/Projetos/nodeCurso/apiNativa/fs/index.html'))

//normalizar url (varras)
console.log('normalize', path.normalize('//home//user//Projetos/nodeCurso//apiNativa//fs/index.html/..'))

//junta e monta um caminho
console.log('join path', path.join('/teste', 'teste2', 'teste3', 'dir2', '..'))

// trás o caminho absoluto
console.log('resolve', path.resolve('path.js'))

// pega a versão do arquivo
console.log('extension', path.extname('path.js'))
