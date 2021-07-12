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

const computeSquareRootRec = (n, p) => {
    if (!p) {
        p = n / 2.0;
        console.log(p);
    }
    var div = n / p;
    var res = (div + p) / 2.0;
    if (p == res) {
        return p
    }
    return computeSquareRootRec(n, res);
};
console.log(computeSquareRootRec(144));

const computeSquareRoot = (n, p) => {
    if (!p) p = n/2; //4.5
    let div = n/p; //2
    let resDiv = (div + p)/2; //6.5/2 = 3.25
    res = p === resDiv ? p : computeSquareRoot(n, resDiv);
    return res;
};
console.log('Racine carrée en récursive: ', computeSquareRoot(9)); //3

