var euro = Number(prompt("Enter Euro value"));
var usd = Number(prompt("Enter USD value"));

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

    function deletezero() {
        if (Number.isInteger(euro) || Number.isInteger(usd)) {
            return euro, usd;
        } else {
            euro = euro.toFixed(2);
            usd = usd.toFixed(2);
            return euro, usd;
        }
    }
    deletezero();
    if ((euro <= 0) || (usd <= 0) || (isNaN(euro)) || (isNaN(usd))) {
        console.log("Incorrect data");
    } else {
        console.log(euro + " euros are equal " + UAHtoEuro + " UAH, " + usd + " dollars are equal " + UAHtoUSD + " UAH, one euro is equal " + equalEuroToUsd + " dollars");
    }
}
convectorValute();