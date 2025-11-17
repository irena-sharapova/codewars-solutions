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
  console.log(greet ());gir 