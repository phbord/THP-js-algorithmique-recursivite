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
    n === 0 ? return 1 : return x * computeFactorialRec(n - 1)
}
computeFactorialRec = (5); //
// 5*(4)*4*(4-1)*3*(3-1)*2*(2-1)*1*(1-1)