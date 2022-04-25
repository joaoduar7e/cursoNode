// function soma(a) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(a + 500);
//         }, 3000);
//     })
// }

function soma(a) {
    return new Promise((resolve, reject) => {
        if (Number(a) == NaN || Number(a) == undefined || typeof a == 'number') {
            reject('Tá errado ai')
        }
        setTimeout(() => {
            resolve(a + 500);
        }, 3000);
    })
}

async function main() {
    try {
        // executar uma função usa await
        const result = await soma('a');
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}

main();