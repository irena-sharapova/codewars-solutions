// 1. Gravity Flip
let right = [3, 2, 1, 2];
let leftFromRight = right.reverse();
console.log (leftFromRight);

// 1.1 flip function
const flip =(d,a) => {
    if (d === "R") {
        return a.sort((x,y)=> x-y);
    };
    if (d ==="L") {
        return a.sort((x,y)=> y-x);
    }
    
    
}
console.log(flip("R", [2, 3, 4, 5, 6]));
console.log(flip("L", [3, 2, 1, 2]));

// 2. Summ array
function sum (numbers) {
  return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}
let numbers = [3, 0, 4, 1];
console.log (sum (numbers));
// 3. Function simple 
function greet () {
  return "hello world!";
  }
  console.log(greet ());

// 4. Even & odd numbers  
function evenOrOdd(number) {
    if (number % 2 === 0) {
        return "Even";
    }
    if (number % 2 !==0){
        return "Odd";
    }
}
console.log (evenOrOdd(4));
console.log (evenOrOdd(3));

// 5. If palindrome
function isPalindrome(x) {
    const lowercase = x.toLowerCase();
    const reverseX = lowercase.split(" ").reverse( ).join(" ");
    if (lowercase === reverseX) {
        return true;
    } else return false;
}
console.log (isPalindrome("Abba"));