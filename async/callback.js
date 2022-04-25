// callback passa o callback function
function soma(a, callback) {
    return setTimeout(() => {
        return callback(null, a + 500);
    }, 3000);
}

//callback function
// Primeiro parame sempre trata erro
function resolveSoma(err, result) {
    if (err) {
        throw err;
    } else {
        console.log(result);
    }
}

soma(200, resolveSoma);