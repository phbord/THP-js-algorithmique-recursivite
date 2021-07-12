//1. Valeur factorielle

const computeFactorialIt = (n) => {
    let res = 1;
    for(let i = 1; i <= n; i++) {
        res *= i;
    }
    return res;
};
console.log('Valeur factorielle en itération: ', computeFactorialIt(5)); //120

const computeFactorialRec = (n) => {
    let res = n === 0 ? 1 : n * computeFactorialRec(n - 1);
    return res;
};
console.log('Valeur factorielle en récursive: ', computeFactorialRec(5)); //120 => 5*4*3*2*1


//2. Puissance d'un nombre

const computePowerIt = (n, p) => {
    try {
        let res = 1;
        for (let i = 0; i < p; i++) {
            res *= n;
        }
        return res;
    } catch (e) {
        return 0;
    }
};
console.log('Puissance d\'un nombre en itération: ', computePowerIt(5, 3)); //125

const computePowerRec = (n, p) => {
    return res = p === 0 ? 1 : n * computePowerRec(n, --p);
};
console.log('Puissance d\'un nombre en récursive: ', computePowerRec(5, 3)); //125


//3. Racine carrée

Number.isInteger = Number.isInteger || function(value) {
    return typeof value === "number" &&
           isFinite(value) &&
           Math.floor(value) === value;
};
const computeSquareRoot = (n) => {
    let res = Number.isInteger(n) ? 1 : n * computeSquareRoot(--n);
    console.log('>>>')
    return res;
};
console.log('Racine carrée en récursive: ', computeSquareRoot(9)); //3

