function soma() {
    let soma = 0
    for (i = 0; i < 1000; i++) {
        if (i%5 === 0 || i%7 === 0) {
            soma += i
        }
    }
    return soma
}
console.log(soma())