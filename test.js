test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const {fromEuroToDollar} = require('./app.js')

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})

test("One hundred dollars should be 12790 yens", function(){
    //import the function from app.js
    const { fromDollarToYen } = require('./app.js')
     const yens = fromDollarToYen(100)
     const expected = 100 * 127.9;
     expect(fromDollarToYen(100)).toBe(12790);
})

test("Ten thousand yen should be 62.5 pounds", function(){
    //import the function from app.js
    const { fromYenToPound } = require('./app.js')
     const pounds = fromYenToPound(10000)
     const expected = 10000 * 0.00625;
     expect(fromYenToPound(10000)).toBe(62.5);
})