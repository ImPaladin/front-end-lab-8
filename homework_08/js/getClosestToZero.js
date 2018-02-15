function getClosestToZero() {
    let n = Math.abs(arguments[0]);
    for (let i of arguments) {
        if (Math.abs(n) > Math.abs(i)) {
            n = i;
        }
    }
    return n;
}