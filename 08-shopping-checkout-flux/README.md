# Shopping checkout

Implement the code for a supermarket checkout that calculates the total price of a number of items. In a normal supermarket, 
things are identified using Stock Keeping Units, or SKUs. In our store, we’ll use individual letters of the alphabet 
(A, B, C, and so on). Our goods are priced individually. In addition, some items are multipriced: buy n of them, and 
they’ll cost you y cents. For example, item ‘A’ might cost 50 cents individually, but this week we have a special offer: 
buy three ‘A’s and they’ll cost you $1.30. In fact this week’s prices are:

| Sku  | Price   | Offer      |
|------|---------|------------|
| A    | 50      | 3 for 130  |
| B    | 30      | 2 for 45   |
| C    | 20      |            |
| D    | 15      |            |

Our checkout accepts items in any order, so that if we scan a B, an A, and another B, we’ll recognize the two B’s and 
price them at 45 (for a total price so far of 95). Because the pricing changes frequently, we need to be able to pass in 
a set of pricing rules each time we start handling a checkout transaction.

## Learning objectives
Learn about flux and unidirectional data flow architecture.
http://facebook.github.io/flux/docs/overview.html#content

## Useful links
http://facebook.github.io/jest/  
[React and Flux: Building Applications with a Unidirectional Data Flow](https://www.youtube.com/watch?v=i__969noyAM)  
[Hacker Way: Rethinking Web App Development at Facebook](https://youtu.be/nYkdrAPrdcw?t=9m25s)