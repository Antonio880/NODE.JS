//setTimeout roda uma função dps de X milisegundos

/* let timeout = 3000
let finished = () => console.log('finished!')

setTimeout(finished, timeout)
console.log('Tested timeout') */

//clearTimeout cancela um timeOut

/* let timeout = 3000
let finished = () => console.log('finished!')

let timer = setTimeout(finished, timeout)
clearTimeout(timer) */

//setInterval irá repetir a função indefinidamente em determinado espaço de tempo
//clearInterval irá parar o intervalo
let interval = 1000
let finished = () => console.log('finished!')

let clear = setInterval(finished, interval)

setTimeout(() => clearInterval(clear), 3014)

