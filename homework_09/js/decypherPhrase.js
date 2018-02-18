function decypherPhrase(object, strString) {
    const reverseObj = {};
    Object.keys(object).forEach(key => {
        reverseObj[object[key]] = key;
        console.log(reverseObj);
    });
    return cypherPhrase(reverseObj, strString);
}