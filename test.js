const { sum,  fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');


test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);
    expect(total).toBe(23);
});

test("3.5 euros a dollares", function() {
    let dollars = fromEuroToDollar(3.5);
    let expected = 3.5 * 1.07; 
     expect(dollars).toBe(expected); 
})

test("3.5 dollares a yens", function() {
    let yen = fromDollarToYen(3.5);
    
    let expected = (3.5 * 156.5) / 1.07; 
    
     expect(yen).toBe(expected); 
})

test("3.5 yens a pounds", function() {
    let pounds = fromYenToPound(3.5);
    
    let expected = (3.5 * 0.87) / 156.5; 
    
     expect(pounds).toBe(expected); 
})