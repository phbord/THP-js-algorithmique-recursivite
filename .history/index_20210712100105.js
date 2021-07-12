//Valeur factorielle

const computeFactorialIt = (n) => {
    let res = 1;
    for(let i = 1; i <= n; i++) {
        res *= i;
    }
    return res;
};
console.log(computeFactorialIt(5)); //120

const computeFactorialRec = (n) => {
    let res = n === 0 ? 1 : n * computeFactorialRec(n - 1);
    return res;
}
console.log(computeFactorialRec(5)); //120 => 5*4*3*2*1


//Puissance d'un nombre

const computePowerIt = (n, p) => {
    try {
    for (let i = 1; i <= n; i++) {
        return n *= n;
    }}
}
console.log(computePowerIt(6, 2)); //36

const computePowerRec = (n, p) => {}
console.log(computePowerRec(6, 2));
