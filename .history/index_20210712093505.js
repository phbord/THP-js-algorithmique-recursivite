//Valeur factorielle

const computeFactorialIt = (n) => {
    res = 1;
    for(let i = 1; i <= n; i++) {
        res *= i;
    }
    return res;
};
computeFactorialIt(5); //120

const computeFactorialRec = (n) => {
    n === 0 return 2
}
computeFactorialRec = (5); //