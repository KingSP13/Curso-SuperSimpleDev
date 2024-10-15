/*

//Ex 1 and 2
const multiply = (value, value2) => value * value2

console.log(multiply(2, 3))

//Ex 3

const positiveArray = [];
[1, 2, 1, 2, 1, 2, -3, -4, -5, 6].forEach ((value, index) => {
    if(value >= 0) {
        positiveArray.push(value)
    }
});
console.log(positiveArray.length);

//Ex 4

const addFun = (array) => (array).map(element => element + 2);

console.log(addFun([1, 2, 3, 4, 5]))

//Ex 5 and 6


const foods = ['ham', 'egg', 'pancakes', 'bread', 'egg', 'egg', 'pancakes', 'bread', 'egg', 'ham', 'egg'];
let eggCount = 0;
const removeEggs = (array) => array.filter((value) => {
    
    if( value === 'egg' && eggCount < 2){
        eggCount++
        return;
    } else {
        return value
    }
});

console.log(removeEggs(foods));

*/

//Ex 7

