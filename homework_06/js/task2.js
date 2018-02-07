var euro = parseFloat(prompt("Enter Euro value"));
var usd = parseFloat(prompt("Enter USD value"));

function convectorValute() {
    //correct data for 07.02.2018 https://finance.i.ua/nbu/ 
    var oneE = 33.8565;
    var oneD = 27.4609;
    var equalEuroToUsd, UAHtoEuro, UAHtoUSD;
    UAHtoEuro = euro * 33.8565;
    UAHtoUSD = usd * 27.4609;
    equalEuroToUsd = +(oneE / oneD).toFixed(2);
    UAHtoEuro = +UAHtoEuro.toFixed(2);
    UAHtoUSD = +UAHtoUSD.toFixed(2);
    console.log(euro.toFixed(2) + " euros are equal " + UAHtoEuro + " UAH, " + usd.toFixed(2) + " dollars are equal " + UAHtoUSD + " UAH, one euro is equal " + equalEuroToUsd + " dollars");
}
convectorValute();