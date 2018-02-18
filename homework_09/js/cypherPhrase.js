function cypherPhrase(object, strString) {
    strString = strString.split('');
    strString = getTransformedArray(strString, el => {
        Object.keys(object).forEach(key => {
            if (el === key) {
                el = object[el];
            }
        });
        return el;
    }).join('');
    return strString;
}