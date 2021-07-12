const computeFactorialIt = (n) => {
    res = 0;
    for(let i = 0; i < n; i++) {
        i *= i;
    }
    return res;
};

computeFactorialIt(5);