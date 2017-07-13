/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/


function handValue (cards) {
 let totalValue = 0;
      for (var i = 0; i < cards.length; i++) {
        if(cards[i] === "K" || cards[i] === "J" || cards[i] === "Q"){
          cards[i] = 10;
        } else if(totalValue >= 21){
          cards[i] = 11;
        }




      totalValue = parseInt(cards[i]) + totalValue;

    }
  return totalValue;
}


/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
