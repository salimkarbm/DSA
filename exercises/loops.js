// 1. "Fizzbuzz" is a famous interview question used in programming interviews. It goes something like this:
//     • Loop through the numbers 1 to 100
//     • If the number is divisible by 3, print "Fizz"
//     • If the number is divisible by 5, print "Buzz"
//     • If the number is divisible by both 3 and 5, print "FizzBuzz"
//     • If the number is not divisible by 3 or 5, print the number
// TIP: A number x is divisible by a number y if the answer to x / y has a remainder of 0. For example, 10 is divisible by 2 because 10 / 2 = 5 with no remainder. You can check if a number is divisible by another number by checking if x % y === 0.
// Keep in mind that in an interview, you would want to write efficient code with very little duplication. We don't want you to worry about that for this question. Just focus on practicing using loops.
// Directions:
// Write a while loop that:
//     • Loop through the numbers 1 to 20
//     • If the number is divisible by 3, print "Fizz"
//     • If the number is divisible by 5, print "Buzz"
//     • If the number is divisible by 3 and 5, print "FizzBuzz"
//     • If the number is not divisible by 3 or 5, print the number

/*
 * Programming Quiz
 */
/*
 * QUIZ REQUIREMENTS
 * - Your code should have a variable `x` with a starting value of `1`
 * - Your code should include a `while` loop
 * - Your `while` loop should have a stop condition
 * - Your code should use a conditional statement
 * - Your code should increment `x` by `1` each time the loop executes
 * - Your code should produce the expected output
 * - Your code should not be empty
 * - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
 */

//var x = 1

// while (/* your stop condition goes here */) {
//     // check divisibility
//     // print Fizz, Buzz, or FizzBuzz
//     // increment x
// }
//SOLUTION
let x = 1
while (x < 20) {
  if (x % 3 === 0 && x % 5 === 0) {
    console.log('FizzBuzz')
  } else if (x % 5 === 0) {
    console.log('Buzz')
  } else if (x % 3 === 0) {
    console.log('Fizz')
  } else {
    console.log(x)
  }
  x++
}
// 2. Write a loop that prints out the following song. Starting at 99, and ending at 1 bottle.
// 99 bottles of juice on the wall! 99 bottles of juice! Take one down, pass it around... 98 bottles of juice on the wall!
// 98 bottles of juice on the wall! 98 bottles of juice! Take one down, pass it around... 97 bottles of juice on the wall!
// ...
// 2 bottles of juice on the wall! 2 bottles of juice! Take one down, pass it around... 1 bottle of juice on the wall!
// 1 bottle of juice on the wall! 1 bottle of juice! Take one down, pass it around... 0 bottles of juice on the wall!

// Some Notes:
//     1. Note the pluralization of the word "bottle" when you go from 2 bottles to 1 bottle.
//     2. Your text editor may try to autocorrect your ellipses (...) to the ellipses character (…). Do not use the ellipses character for this quiz; use three consecutive periods instead.
/*
 * Programming Quiz
 *
 * Use the following `while` loop to write out the song "99 bottles of juice".
 * Log the your lyrics to the console.
 *
 * Note
 *   - Each line of the lyrics needs to be logged to the same line.
 *   - The pluralization of the word "bottle" changes from "2 bottles" to "1 bottle" to "0 bottles".
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have a variable `num` with a starting value of `99`
 * - Your code should include a `while` loop
 * - Your `while` loop should have a stop condition
 * - Your code should produce the expected output, as explained above
 * - Your code should not be empty
 * - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
 */

//var num = 99

// while (/* your stop condition goes here */) {
//     // check value of num
//     // print lyrics using num
//     // don't forget to check pluralization on the last line!
//     // decrement num
// }
//SOLUTION
function bottles(num) {
  while (num > 0) {
    let word = num == 1 ? 'bottle' : 'bottles'
    let word2 = num - 1 == 1 ? 'bottle' : 'bottles'
    console.log(`
  ${num} ${word} of juice on the wall! ${num} ${word} of juice! Take one down, pass it around... ${
      num - 1
    } ${word2} of juice on the wall!
  `)
    num--
  }
}
// 3. NASA's countdown to launch includes checkpoints where NASA engineers complete certain technical tasks. During the final minute, NASA has 6 tasks to complete:
//     • Orbiter transfers from ground to internal power (T-50 seconds)
//     • Ground launch sequencer is go for auto sequence start (T-31 seconds)
//     • Activate launch pad sound suppression system (T-16 seconds)
//     • Activate main engine hydrogen burnoff system (T-10 seconds)
//     • Main engine start (T-6 seconds)
//     • Solid rocket booster ignition and liftoff! (T-0 seconds)
// NOTE: "T-50 seconds" read as "T-minus 50 seconds".
// Directions:
// Write a while loop that counts down from 60 seconds and:
//     • If there's a task being completed, it prints out the task
//     • If there is no task being completed, it prints out the time as T-x seconds
// Use the task and time descriptions described above.
// Your Code:
// Your output should look like the following:
// T-60 seconds
// T-59 seconds
// T-58 seconds
// ...
// T-51 seconds
// Orbiter transfers from ground to internal power
// T-49 seconds
// ...
// T-3 seconds
// T-2 seconds
// T-1 seconds
// Solid rocket booster ignition and liftoff!
/*
 * Programming Quiz: Countdown, Liftoff! (4-3)
 *
 * Using a while loop, print out the countdown output above.
 */
/*
 * QUIZ REQUIREMENTS
 * - Your code should include a `while` loop
 * - Your `while` loop should have a stop condition
 * - Your code should produce the expected output, as explained above
 * - Your code should not be empty
 * - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
 */
// your code goes here
//SOLUTION
let time = 60
while (time >= 0) {
  if (time === 50) {
    console.log('Orbiter transfers from ground to internal power')
  } else if (time === 31) {
    console.log('Ground launch sequencer is go for auto sequence start')
  } else if (time === 16) {
    console.log('Activate launch pad sound suppression system')
  } else if (time === 10) {
    console.log('Activate main engine hydrogen burnoff system')
  } else if (time === 6) {
    console.log('Main engine star')
  } else if (time === 0) {
    console.log('Solid rocket booster ignition and liftoff!')
  } else {
    console.log(`T-${time} Seconds`)
  }
  time--
}

// 4. Rewrite the following while loop as a for loop:
// var x = 9;
// while (x >= 1) {
//   console.log("hello " + x);
//   x = x - 1;
// }
// Your Code:
/*
 * Programming Quiz
 */
/*
 * QUIZ REQUIREMENTS
 * - Your code should use a `for` loop
 * - Your `for` loop should specify a starting condition `x` with the value of `9`
 * - Your `for` loop should have a stop condition for the value of `x`
 * - Your `for` loop should decrement `x` each time it executes
 * - Your code should produce the expected output, as explained above
 * - Your code should not be empty
 * - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
 */

// rewrite the while loop as a for loop
// var x = 9;
// while (x >= 1) {
//     console.log("hello " + x);
//     x = x - 1;
// }
for (var z = 9; z >= 1; z = z - 1) {
  console.log('hello ' + z)
}

// 5. Here is a for loop that's supposed to print the numbers 5 through 9. Fix the error!
// for (x < 10; x++) {
//   console.log(x);
// }
// Your Code:
/*
 * Programming Quiz: Fix the Error
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should use a `for` loop
 * - Your `for` loop should specify a starting condition `x` with the value of `5`
 * - Your `for` loop should have a stop condition for the value of `x`
 * - Your `for` loop should increment `x` each time it executes
 * - Your code should produce the expected output, as explained above
 * - Your code should not be empty
 * - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
 */
// fix the for loop
// for (x < 10; x++) {
//     console.log(x);
// }
//SOLUTION
for (let k = 0; k < 200; k++) {
  console.log(k)
}

// 6. The for loop below has an error. Fix it!
// for (let k = 0 k < 200 k++) {
//   console.log(k);
// }
// Your Code:
/*
 * Programming Quiz: Fix the Error
 */
/*
 * QUIZ REQUIREMENTS
 * - Your code should use a `for` loop
 * - Your `for` loop should specify a starting condition `k` with the value of `0`
 * - Your `for` loop should have a stop condition for the value of `k`
 * - Your `for` loop should increment `k` each time it executes
 * - Your code should produce the expected output, as explained above
 * - Your code should not be empty
 * - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
 */
// fix the for loop
// for (let k = 0 k < 200 k++) {
//     console.log(k);
// }
//SOLUTION
let factorial = 12
let result = factorial
for (let f = 1; f < factorial; f++) {
  result *= f
  console.log(result)
}
// 7. Write a for (note: not a function) loop that prints out the factorial of the number 12:
// A factorial is calculated by multiplying a number by all the numbers below it. For instance, 3! or "3 factorial" is 3 * 2 * 1 = 6
// 3! = 3 * 2 * 1 = 6
// 3!=3∗2∗1=6
// 4! = 4 * 3 * 2 * 1 = 24
// 4!=4∗3∗2∗1=24
// 5! = 5 * 4 * 3 * 2 * 1 = 120
// 5!=5∗4∗3∗2∗1=120
// Save your final answer in a variable called solution and print it to the console.
// Your Code:
/*
 * Programming Quiz: Factorials
 */

// your code goes here
// SOLUTION

// 8. Theater seats often display a row and seat number to help theater goers find their seats. If there are 26 rows (0 to 25) and 100 seats (0 to 99) in each row, write a nested for loop to print out all of the different seat combinations in the theater.
// Example output for row-seat information: output each row and seat number on a separate line
// 0-0
// 0-1
// 0-2
// ...
// 25-97
// 25-98
// 25-99
/*
 * Programming Quiz: Find my Seat
 *
 * Write a nested for loop to print out all of the different seat combinations in the theater.
 * The first row-seat combination should be 0-0
 * The last row-seat combination will be 25-99
 *
 * Things to note:
 *  - the row and seat numbers start at 0, not 1
 *  - the highest seat number is 99, not 100
 */
/*
 * QUIZ REQUIREMENTS
 * - Your code should use a nested `for` loop'
 * - Your code should produce the expected output, as explained above
 */
// Write your code here
