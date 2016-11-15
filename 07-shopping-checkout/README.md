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
Primitive Obsession
https://sourcemaking.com/refactoring/primitive-obsession

## Rules
- **No** primitives in or out of public interfaces
  - string, number, boolean, null, undefined
  - (or arrays of these)
  
```javascript
// Bad
thing.doPrimitiveThings('a string literal');

// Bad
const primitive = thing.returnPrimitive(); 

// Good
const price = new Price(123);
thing.doPriceThings(price);

// Good
const price = thing.returnPrice(); // returns a Price()
```
  
- **No** object literals (or arrays of these)
```javascript
// Bad
thing.doLiteral({ a: 'literal' });

// Bad
const literal = thing.getLiteral(); // returns { a: 'literal' }

// Good
const price = new Price(123);
thing.doPriceThings(price);

// Good
const price = thing.returnPrice(); // returns a Price()
``` 
  
- **No** accessing object properties directly (use getters/setters)
```javascript
// Bad
const value = object.thing;

// Bad
object.thing = 123;

// Good
const value = object.getThing();

// Good
object.setThing(123);
```
