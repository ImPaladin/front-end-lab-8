function isPrime(a) {
    for (let i = 2; a > i; i++) {
        if (a % i === 0) {
            return false;
        }
    }
    return true;
}