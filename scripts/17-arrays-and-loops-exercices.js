    /*


    //Ex 1

    const numArray = [10, 20, 30];
    numArray[2] = 99;
    console.log(numArray);

    //Ex 2

    function getLastValue() {
    console.log(numArray.length)
    arrayLength = numArray.length-1
    console.log(numArray[arrayLength])
    }

    getLastValue()
    //Ex 3

    const myArray = ['hi', 'hello', 'good morning', 'good bye'];
    const invertedArray = [];


    function invertArray(){
    let first = myArray[0]
    let last = myArray[myArray.length-1]

    for(let i = 0; i < myArray.length; i++) {
    const num = myArray[i]
    invertedArray.push(num)
    }
    invertedArray[0] = last;
    invertedArray[myArray.length-1] = first
    }
    invertArray()
    console.log(myArray)
    console.log(invertedArray)

    //Ex 4

    for(let i = 0; i <= 10; i+=2) {
    console.log(i)
    }

    //Ex 5

    for(let i = 5; i >= 0; i+=(-1)) {
    console.log(i)
    }

    //Ex 6
    let i = -2
    while(i < 10) {
    i+=2;
    console.log(i);
    }
    ---------------------------------
    let i = 6
    while( i > 0) {
    i += (-1)
    console.log(i)
    }

    //Ex 7

    let nums = [5, 6, 7, 8, 99];
    let numsAdded = [];
    for(let i = 0; i <= nums.length-1; i++) {
    numsAdded.push(nums[i]+1)
    };

    console.log(nums);
    console.log(numsAdded);

    //Ex 7 2.0

    let nums = [5, 6, 7, 8, 99];
    let addedNums = nums.map(function(nums) {
    return nums+1;
    })

    console.log(addedNums)

    //Ex 8

    let nums = [5, 6, 7, 8, 99];
    let numsAdded = [];
    let additionFactor = 5
    for(let i = 0; i <= nums.length-1; i++) {
    numsAdded.push(nums[i]+additionFactor)
    };

    console.log(nums);
    console.log(numsAdded);

    //Ex 8 2.0
    let additionFactor = 3;
    let nums = [5, 6, 7, 8, 99];
    let addedNums = nums.map(function(nums) {
    return nums+additionFactor;
    })

    console.log(addedNums)

    //Ex 9

    let numBox = [8, 7, 6, 5, 4, 3]
    let minimum = '';
    let maximum = '';

    function filter(numBox, minimum, maximum) {
    if (numBox == '') {
    minimum = 0
    maximum = 0
    console.log(minimum)
    console.log(maximum)

    }   else {
    minimum = Math.min.apply(Math, numBox)
    console.log(minimum)
    maximum = Math.max.apply(Math, numBox)
    console.log(maximum)
    }
    }
    filter(numBox)

    //Ex 9 2.0       
    let numBox = [8, 7, 6, 5, 4, 3]

    function applyFilter(numBox) {
    numBox.sort((a, b) => a - b)

    let min = numBox[0]
    let max = numBox[numBox.length-1]

    console.log(min)
    console.log(max)
    }
    applyFilter(numBox)

//Ex 10 

    let numBox1 = [100, 99, 98, 97, 96, 95];
    let numBox2 = [7, 8, 9, 10, 11, 12];
    let addedArrays = [];

for(let i = 0; i < numBox1.length; i++) {
        addedArrays.push(numBox1[i] + numBox2[i])
}

console.log(addedArrays)
*/

//Ex 11

let numBox = [-6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4]
let positiveNumbers = '';
for(let i = 0; i < numBox.length; i++) {
    if (numBox[i] >  0) {
        positiveNumbers++
    }
}

console.log(positiveNumbers)