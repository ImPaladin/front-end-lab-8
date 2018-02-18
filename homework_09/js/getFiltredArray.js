function getFiltredArray(arr, predicateFunc) {
    const filtredArr = []
    forEach(arr, el => {
        if (predicateFunc(el)) {
            filtredArr.push(el);
        }
    });
    return filtredArr;
}