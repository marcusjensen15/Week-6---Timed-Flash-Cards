// export function test() {
//   console.log('this is the back-end');
// } test();

//Example code for running tests in jest.test.js//

// export var MyObject = function(number1,number2,number3){
//
//   this.number1 = number1,
//   this.number2= number2,
//   this.number3 = number3
//
// }
//
// MyObject.prototype.multiplyNumbers = function() {
//   var multiply = this.number1 * this.number2;
//   return multiply;
// }
//
// export var MyObject2 = function(number1,number2,number3){
//
//   this.number1 = number1,
//   this.number2= number2,
//   this.number3 = number3
//
// }
//
// MyObject2.prototype.multiplyNumbers = function() {
//   var multiply = this.number1 + this.number2;
//   return multiply;
// }

export class MyCard {
  constructor(frontSide,backSide){
    this.frontSide = frontSide;
    this.backSide = backSide;
    this.cardSet = [this.frontSide,this.backSide];
  }

}

export class Cards {
  constructor(){

    this.completedCards = [];
  }
  addCard(card){
    this.completedCards.push(card);

  }


}

//Example code for running tests in jest.test.js//
