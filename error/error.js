//throw para a execução do cod
//throw new Error('Ah não, deu erro!')

//try -> tente executar algo
//catch -> se der erro execute o cath

function execute() {
    executeTo()
}

function executeTo() {
    throw new Error('Ah não, deu erro!')
}

function init() {
    try {
        execute()
    } catch (e) {
        console.error(`Temos um BO! ${e.message}`)
    }
}

init()
console.log('Depois do erro')