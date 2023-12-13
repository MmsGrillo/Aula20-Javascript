function maior() {
    let maior = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] > maior) {
            maior = array[i];
            index = i
        }
    }

    return index
}
function menor() {
    let menor = 9999;

    for (let i = 0; i < array.length; i++) {
        if (array[i] < menor) {
            menor = array[i];
            index = i
        }
    }

    return index
}

const array = [10, 5, 20, 8, 15];

console.log(`O índice do maior valor é: ${maior(array)}`);
console.log(`O índice do menor valor é: ${menor(array)}`);
