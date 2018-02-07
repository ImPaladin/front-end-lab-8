var sideFirst =parseFloat(prompt("Enter FirstSide of triangle"));
var sideSecond = parseFloat(prompt("Enter SecondSide of triangle"));
var sideLast =parseFloat(prompt("Enter LastSide of triangle"));


function triangle() {
    var typeofTriangle = "";
    var square = 0;
    var pythagorasC = Math.sqrt(Math.pow(sideFirst, 2) + Math.pow(sideSecond, 2));
    var pythagorasA = Math.sqrt(Math.pow(sideSecond, 2) + Math.pow(sideLast, 2));
    var pythagorasB = Math.sqrt(Math.pow(sideFirst, 2) + Math.pow(sideLast, 2));

    function triangleTypeTest() {
        if ((sideLast == pythagorasC) || (sideFirst == pythagorasA) || (sideSecond == pythagorasB)) {
            typeofTriangle = "Right Triangle";
        } else if ((sideFirst == sideSecond) && (sideFirst == sideLast)) {
            typeofTriangle = "Equilateral";
        } else if ((sideFirst == sideSecond) || (sideFirst == sideLast) || (sideSecond == sideLast)) {
            typeofTriangle = "Isosceles";
        } else if ((sideFirst != sideSecond) && (sideFirst != sideLast) && (sideSecond != sideLast)) {
            typeofTriangle = "Scalene";
        }
    }

    function squareTriangle() {
        var perimetryHalf = (sideFirst + sideSecond + sideLast) / 2;
        square = Math.sqrt(perimetryHalf * ((perimetryHalf - sideFirst) * (perimetryHalf - sideSecond) * (perimetryHalf - sideLast)));
        if (Number.isInteger(square)) {
            return square;
        } else {
            square = +square.toFixed(2);
            return square;
        }
    }

    function negativeTest() {
        if ((sideFirst <= 0) || (sideSecond <= 0) || (sideLast <= 0) || (square == 0) || (isNaN(square))) {
            console.log("Incorrect data");
        } else {
            console.log("type of triangle is " + typeofTriangle + " and square is " + square);
        }
    }
    triangleTypeTest();
    squareTriangle();
    negativeTest();
}
triangle();