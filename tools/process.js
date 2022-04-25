console.log(`Nome do arquivo: `, __filename);
console.log(`Diretório do arquivo (origem do arquivo): `, __dirname);
console.log(`Diretório em que foi invocado: `, process.cwd());
// console.log(`Parâmetros de execução: `, process.env)
console.log(`Sistema Operacional: `, process.env.OS)
console.log(`Usuário na SO): `, process.env.USERNAME)
console.log(`Ambiente do servidor: `, process.platform)