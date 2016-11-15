# Rock Paper Scissors
We only care about the result of the first gesture versus the 2nd gesture.

| Gesture  | Versus 	| Result |
|----------|----------|--------|
| Rock	   | Scissors | Win	   |
| Rock	   | Paper		| Lose	 |
| Rock	   | Rock		  | Draw	 |
| Scissors | Paper 		| Win	   |
| Scissors | Rock		  | Lose	 |
| Scissors | Scissors	| Draw	 |
| Paper    | Rock 		| Win	   |
| Paper    | Scissors	| Lose	 |
| Paper    | Paper		| Draw	 |

## Learning objectives
https://sourcemaking.com/refactoring/replace-conditional-with-polymorphism

## No conditionals
- **No** `if`, `else`, `else if`
- **No** `? ternary : operations`
- **No** `doSomething() || doSomethingElse()`
- **No** Using arrays/maps as `magical[conditions]`

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
