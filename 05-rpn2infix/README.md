# Reverse Polish Notation to Infix
https://en.wikipedia.org/wiki/Reverse_Polish_notation  
http://rosettacode.org/wiki/Parsing/RPN_to_infix_conversion

## Learning Goal
Take suitably size steps to drive out functionality.

## Exercise
- Assume an input of a correct, space separated, string of tokens.
- Generate a space separated output string representing the same expression in infix notation.

| Input                     | Output                                |
|---------------------------|---------------------------------------|
| 3 4 2 * 1 5 - 2 3 ^ ^ / + | 3 + 4 * 2 / ( 1 - 5 ) ^ 2 ^ 3         |
| 1 2 + 3 4 + ^ 5 6 + ^     | ( ( 1 + 2 ) ^ ( 3 + 4 ) ) ^ ( 5 + 6 ) |

### Operator precedence
| Operator	| Precedence | Associativity |
|-----------|------------|---------------|
| ^	        | 4	         | Right         |
| *	        | 3	         | Left          |
| /	        | 3	         | Left          | 
| +	        | 2	         | Left          | 
| -	        | 2	         | Left          | 

## Baby step rules
1. Start a timer for 4 minutes (feel free to adjust to your pair)
2. Write exactly 1 test
    * If the timer ends and the test is red then `git reset --hard`
    * If the test is green then `git commit -a -m "refactor {feature}"`
4. Restart timer
5. Refactor
    * If the timer ends and refactoring is not complete then `git reset --hard`
    * If the refactoring is complete before the timer ends `git commit -a -m "refactor {feature}"`
6. Goto 1 `goto statements ftw`
