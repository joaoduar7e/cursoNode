const {spawn} = require('child_process')
//listar da pasta - coloca em array para pegar da pag anterior
const ls = spawn('ls', ['..'])


ls.stdout.on('data', (data)=>{
    console.log(`stdout: ${data}`)
})

ls.stderr.on('data', (data)=>{
    console.log(`stderr: ${data}`)
})

ls.on('close', (code)=>{
    console.log(`Processo em segundo plano finalizado com o código ${code}`)
})