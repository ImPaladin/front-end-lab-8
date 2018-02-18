function collectIds(movies) {
    const filter = getFiltredArray(movies, el => {
        return el.rating > 3;
    });
    return getTransformedArray(filter, el => {
        return el.id;
    });
}