
//Example testing for template//

import { MyObject, MyCard, Cards } from './../src/dice-game.js'

// describe('MyObject', () => {
//
//     test('should record three numbers from the user', () => {
//       var myObject= new MyObject(4,6,9);
//       expect(myObject.number1).toEqual(4);
//       expect(myObject.number2).toEqual(6);
//       expect(myObject.number3).toEqual(9);
//
//
//     });
//
// });
//
// describe('Numbers Multiply', () => {
//
//     test('should return the product of two numbers', () => {
//       var myObject= new MyObject(4,6,9);
//       expect(myObject.multiplyNumbers()).toEqual(24);
//
//     });
//
// });
//
// describe('Numbers Multiply', () => {
//
//     test('should return the product of two numbers', () => {
//       var myObject= new MyObject2(4,6,9);
//       expect(myObject.multiplyNumbers()).toEqual(10);
//
//     });
//
// });

describe('MyCard', () => {

    test('should record the front and back side of card from the user', () => {
      var myCard= new MyCard("Hello my friend", "You look nice");
      expect(myCard.frontSide).toEqual("Hello my friend");
      expect(myCard.backSide).toEqual("You look nice");

    });
});
describe('Cards', () => {
  test('this should hold all myCards', () => {
    var myCard= new MyCard("Hello my friend", "You look nice");
    var cards = new Cards();
    cards.addCard(myCard.cardSet);
    expect(cards.completedCards).toEqual([["Hello my friend","You look nice"]]);

  });
});


//Example testing for template//
