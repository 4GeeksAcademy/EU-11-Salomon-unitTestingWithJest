const fromDollarToYen = function(valueInDollar){
    let valueInYen = valueInDollar * 127.9;
    return valueInYen;
}

const fromEuroToDollar = function(valueInEuro){
    let valueInDollar = valueInEuro * 1.2;
    return valueInDollar;
}

const fromYenToPound = function(valueInYen){
    let valueInPound = valueInYen * 0.00625;
    return valueInPound;
}

module.exports = {fromDollarToYen, fromEuroToDollar, fromYenToPound}
