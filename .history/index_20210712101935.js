//Valeur factorielle

const computeFactorialIt = (n) => {
    let res = 1;
    for(let i = 1; i <= n; i++) {
        res *= i;
    }
    return res;
};
console.log('Valeur factorielle itération: ', computeFactorialIt(5)); //120

const computeFactorialRec = (n) => {
    let res = n === 0 ? 1 : n * computeFactorialRec(n - 1);
    return res;
}
console.log(computeFactorialRec(5)); //120 => 5*4*3*2*1


//Puissance d'un nombre

const computePowerIt = (n, p) => {
    try {
        let res = 1;
        for (let i = 1; i <= p; i++) {
            res *= n;
        }
        return res;
    } catch (e) {
        return 0;
    }
}
console.log(computePowerIt(5, 3)); //125

const computePowerRec = (n, p) => {
    let res = p === 0 ? 1 : computePowerRec(n, p - 1);
    return res;
}
console.log(computePowerRec(6, 2)); //
