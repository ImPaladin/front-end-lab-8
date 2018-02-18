function getFilteredArray(arr, predicateFunc) {
    const filteredArr = []
    forEach(arr, el => {
        if (predicateFunc(el)) {
            filteredArr.push(el);
        }
    });
    return filteredArr;
}