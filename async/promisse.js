function soma(a) {
    // Faz uma promessa pq não sabe o que vai ocorrer (tempo, etc)
    return new Promisse((resolve, reject) => {
        setTimeout(() => {
            resolve(a + 500);
        }, 3000);
    })
}

//Then retorna  o resolve
soma(200).then((resultado) => {
    console.log(resultado);
}).catch;