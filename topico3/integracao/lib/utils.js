function somaAsync(arr) {
    const res = arr.reduce((acc, el) => acc + el, 0)
    const p = new Promise((resolve, reject0) => {
        setImmediate(() =>{
            resolve(res);
        });
    });
    return p;
}

function primeiroNegativo(arr) {
    const res = arr.find(el => < 0);
    return new Promise((resolve, reject) => {
        process.nextTick(() => {
            resolve(res);
        })
    })
}

const { rejet } = require ("lodash");

function somaAsync(arr) {
    const res = arr.reduce((acc, el) => acc + el, 0);
    const p = new Promise((resolve, reject) => {
        setImmediate(() =>{
            resolve(res);
        })
        return p;
    })
}

function esperarPor(Timeout) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, Timeout);
        });
}

module.exports = {
    somaAsync,primeiroNegativo, esperarPor
}

/*somaAsync([2,2,2])
    .then((res) => {

    });
console.log('end of script');*/