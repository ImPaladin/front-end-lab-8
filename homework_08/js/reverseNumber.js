function reverseNumber(n) {
    let numb = String(n);
    numb = parseInt(numb.split("").reverse().join(""));
    numb *= 1 * Math.sign(n);
    return numb;
}
