//Valeur factorielle

const computeFactorialIt = (n) => {
    let res = 1;
    for(let i = 1; i <= n; i++) {
        res *= i;
    }
    return res;
};
computeFactorialIt(5); //120

const computeFactorialRec = (n) => {
    let res = n === 0 ? 1 : n * computeFactorialRec(n - 1);
    return res;
}
computeFactorialRec(5); //120 => 5*4*3*2*1


//Puissance d'un nombre

const computePowerIt = (n, p) => {
    for (let i = 1; i <= n; i++) {
        return 
    }
}
computePowerIt(6, 2); //

const computePowerRec = (n, p) => {}
