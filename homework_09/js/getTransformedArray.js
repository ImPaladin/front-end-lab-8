function getTransformedArray(arr, elReturn) {
    const result = [];
    forEach(arr, el => result.push(elReturn(el)));
    return result;
}