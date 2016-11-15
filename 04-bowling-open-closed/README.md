# Bowling Game Open Closed

## Rules
1. Write the first failing test. It should use a factory method to obtain the object(s) under test.  
2. Make the test pass.  
3. Write the next failing test.  
4. Try to make this test pass by only changing the factory and/or adding new classes.    
    *If you find yourself modifying or adding functionality in existing non-factory classes*  
  1. Refactor the code so that you could proceed without changing these classes. **The refactoring itself should provide no functional changes and the current test should still fail after the refactoring.**  
  2. Now make the test pass.  
  3. Go to step 2.  
  
**The factory should be limited to creating objects and linking them together. No conditionals allowed.**

## Scoring
You get 1 points per "game" that passes the tests. Each `if`, `else`, `else if` you use costs you 1 point. 
Cheeky short-circuit evaluations such as `doSomething() || doSomethingElse()` or `ifSomethingsTrue() && thenDoThis()` 
will also cost you 1 point. Ternary operations cost 2 points. Winner is whoever has the most points!

## End goal
<table>
    <tr>
        <th scope="row">Frame</th>
        <th scope="col">1</th><th scope="col">2</th><th scope="col">3</th><th scope="col">4</th><th scope="col">5</th>
        <th scope="col">6</th><th scope="col">7</th><th scope="col">8</th><th scope="col">9</th><th scope="col">10</th>
	</tr>
    <tr>
        <th scope="row">Rolls</th>
		<td>1,4</td><td>4,5</td><td>6,4</td><td>5,5</td><td>10</td>
		<td>0,1</td><td>7,3</td><td>6,4</td><td>10</td><td>2,8,6</td>
	</tr>
	<tr>
	    <th scope="row">Total</th>
		<td>5</td><td>14</td><td>29</td><td>49</td><td>60</td>
		<td>61</td><td>77</td><td>97</td><td>117</td><td>133</td>
	</tr>
</table>

The game consists of 10 frames as shown above.  In each frame the player has
two opportunities to knock down 10 pins.  The score for the frame is the total
number of pins knocked down, plus bonuses for strikes and spares.  

A spare is when the player knocks down all 10 pins in two tries.  The bonus for
that frame is the number of pins knocked down by the next roll.  So in frame 3
above, the score is 10 (the total number knocked down) plus a bonus of 5 (the
number of pins knocked down on the next roll.)  

A strike is when the player knocks down all 10 pins on his first try.  The bonus
for that frame is the value of the next two balls rolled.  

In the tenth frame a player who rolls a spare or strike is allowed to roll the extra
balls to complete the frame.  However no more than three balls can be rolled in
tenth frame.  

You can read more about bowling scoring here: http://bowling.about.com/od/rulesofthegame/a/bowlingscoring.htm

<table>
	<tr>
		<th>Standard Bowling</th>
		<th colspan=10>Frames (x10)</th>
		<th>Score</th>
	</tr>

	<tr>
		<td>Gutter game</td>
		<td>0,0</td><td>0,0</td><td>0,0</td><td>0,0</td><td>0,0</td>
		<td>0,0</td><td>0,0</td><td>0,0</td><td>0,0</td><td>0,0</td>
		<td>0</td>
	</tr>

	<tr>
		<td>All ones</td>
		<td>1,1</td><td>1,1</td><td>1,1</td><td>1,1</td><td>1,1</td>
		<td>1,1</td><td>1,1</td><td>1,1</td><td>1,1</td><td>1,1</td>
		<td>20</td>
	</tr>

	<tr>
		<td>No spares</td>
		<td>0,0</td><td>3,0</td><td>0,0</td><td>6,2</td><td>0,2</td>
		<td>0,0</td><td>7,1</td><td>0,5</td><td>0,0</td><td>0,0</td>
		<td>26</td>
	</tr>

	<tr>
		<td>A spare</td>
		<td>0,1</td><td>7,2</td><td>3,7</td><td>7,1</td><td>0,0</td>
		<td>0,0</td><td>0,0</td><td>0,0</td><td>0,0</td><td>0,0</td>
		<td>35</td>
	</tr>

	<tr>
		<td>Final spare</td>
		<td>0,0</td><td>0,0</td><td>0,0</td><td>0,0</td><td>0,0</td>
		<td>0,0</td><td>0,0</td><td>0,0</td><td>0,0</td><td>9,1,7</td>
		<td>17</td>
	</tr>

	<tr>
		<td>A strike</td>
		<td>0,0</td><td>0,0</td><td>10</td><td>2,3</td><td>0,0</td>
		<td>0,0</td><td>0,0</td><td>0,0</td><td>0,0</td><td>0,0</td>
		<td>20</td>
	</tr>

	<tr>
		<td>Final strike</td>
		<td>0,0</td><td>0,0</td><td>0,0</td><td>0,0</td><td>0,0</td>
		<td>0,0</td><td>0,0</td><td>0,0</td><td>0,0</td><td>10,3,6</td>
		<td>19</td>
	</tr>

	<tr>
		<td>Perfect game</td>
		<td>10</td><td>10</td><td>10</td><td>10</td><td>10</td>
		<td>10</td><td>10</td><td>10</td><td>10</td><td>10,10,10</td>
		<td>300</td>
	</tr>
</table>

## Additional Challenge
The same rules as standard 10 pin bowling with the following changes:

* **Game** - now 5 frames per game.
* **Frame** - now 3 rolls per frame.
* **Spare** - now counts the next 2 rolls as bonuses and awards 2 bonus rolls in the final frame.
* **Strike** - now counts the next 3 rolls as bonuses and awards 2 bonus rolls in the final frame.
* **Final Frame** - no more than 5 rolls can be made in the final frame.

<table>
	<tr>
		<th>Rapid bowling</th>
		<th colspan=5>Frames (x5)</th>
		<th>Score</th>
	</tr>

	<tr>
		<td>Gutter game</td>
		<td>0,0,0</td><td>0,0,0</td><td>0,0,0</td><td>0,0,0</td><td>0,0,0</td>
		<td>0</td>
	</tr>

	<tr>
		<td>All ones</td>
		<td>1,1,1</td><td>1,1,1</td><td>1,1,1</td><td>1,1,1</td><td>1,1,1</td>
		<td>15</td>
	</tr>

	<tr>
		<td>No spares</td>
		<td>0,0,0</td><td>3,0,1</td><td>0,0,0</td><td>5,2,1</td><td>0,2,0</td>
		<td>14</td>
	</tr>

    <tr>
		<td>A spare</td>
		<td>0,0,0</td><td>7,2,1</td><td>3,2,1</td><td>0,0,0</td><td>0,0,0</td>
		<td>21</td>
	</tr>

	<tr>
		<td>Final spare</td>
		<td>0,0,0</td><td>0,0,0</td><td>0,0,0</td><td>0,0,0</td><td>7,2,1,7,1</td>
		<td>18</td>
	</tr>

	<tr>
		<td>A strike</td>
		<td>0,0,0</td><td>10</td><td>3,5,1</td><td>0,0,0</td><td>0,0,0</td>
		<td>28</td>
	</tr>
	
	<tr>
		<td>A strike + spare</td>
		<td>0,0,0</td><td>10</td><td>8,2</td><td>3,2,1</td><td>0,0,0</td>
		<td>44</td>
	</tr>

	<tr>
		<td>Final spare</td>
		<td>10</td><td>10</td><td>10</td><td>10</td><td>10,10,10,10</td>
		<td>200</td>
	</tr>
</table>

## References/Inspiration
http://butunclebob.com/ArticleS.UncleBob.TheBowlingGameKata
http://www.red-gate.com/blog/code-kata-6-classic-bowling-game-scorer-open-closed
http://matteo.vaccari.name/blog/archives/293
http://www.slideshare.net/kevinrutherford/ocp-kata-24027400
