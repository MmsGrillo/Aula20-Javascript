var mdc = (num1, num2) => {
    while (num2 !== 0) {
        var temp = num2;
        num2 = num1 % num2;
        num1 = temp;
    }
    return `O MDC entre os números é ${num1}`;
}


console.log(mdc(45,15))
