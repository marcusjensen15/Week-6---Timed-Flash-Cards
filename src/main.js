import { Cards, MyCard, showCards } from  './dice-game.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

console.log("hi");

let myCard= new MyCard("Hello my friend", "You look nice");
let myCard2= new MyCard("oink", "pig");

console.log(myCard);
let cards = new Cards();
console.log(cards);
cards.addCard(myCard.frontSide);
cards.addCard(myCard.backSide);
cards.addCard(myCard2.frontSide);
cards.addCard(myCard2.backSide);

console.log(cards);


 showCards = (deck) => {
   return "hello";
  // for(let i = 0; i < deck.length; i ++){
  //   console.log("in function");
  //   setTimeout(function() { alert(deck[i]) }, 2000);
  //
  // }
};

console.log(showCards(cards.completedCards));
//
console.log("hi");
