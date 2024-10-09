//Ex 1

/*

const stringArray = ['hello', 'search', 'apple', 'search', 'monday']

for(let i = 0; i < stringArray.length; i++) {
    const thereIs = stringArray[i]
    let position = [i]
    if(thereIs === 'search') {
        position = [i]
        console.log(position)
    } else if (i === stringArray.length-1 && position[i] != 'search') {
        console.log(-1)
    }
}

//Ex 2

const stringArray = ['hello', 'search', 'apple', 'search', 'monday']

for(let i = 0; i < stringArray.length; i++) {
    const thereIs = stringArray[i]
    let position = [i]
    if(thereIs === 'search') {
        position = [i]
        console.log(position)
        break
    } else if (i === stringArray.length-1 && position[i] != 'search') {
        console.log(-1)
    }
}

//Ex 3

function findIndex(array, word) {
        for (let i = 0; i < array.length; i++) {
          if (array[i] === word) {
            // Instead of creating an accumulator
            // variable and updating it in the loop,
            // we can just return i directly, when
            // we find it since this is a function.
            return i;
          }
        }

        // If the function has not returned by now,
        // logically that means the word must not
        // exist in the array, so we'll return -1.
        return -1;
      }


//Ex 4

const foods = ['egg', 'apple', 'steak', 'egg', 'ham', 'egg']

function removeEgg(foods) {
    const newArray = [];
    for (i = 0; i < foods.length; i++) {
        let item = foods[i]
        
        if(item !== 'egg') {
            newArray.push(item)
            console.log(newArray)
        } 
    }
}
removeEgg(foods)

//Ex 5

const foods = ['egg', 'apple', 'steak', 'egg', 'ham', 'egg']

function removeEgg(foods) {
    const newArray = [];
    let eggCount = 0 

    for (i = 0; i < foods.length; i++) {
        let item = foods[i]

        if(item !== 'egg') {
            newArray.push(item)
            console.log(newArray)
        } else {
            if(item === 'egg' && eggCount < 2) {
            newArray.push(item)
            eggCount++
            console.log(newArray)
        } else {
            eggCount++
        }
    }
}
}
removeEgg(foods)

//Ex 5 - Example

function removeEgg(foods) {
    const result = [];
    let eggsRemoved = 0;

    for (let i = 0; i < foods.length; i++) {
      // Only skip 'egg' if we removed less than 2
      // of them so far.
      if (foods[i] === 'egg' && eggsRemoved < 2) {
        // Update the number of 'egg' we have removed.
        // This must be done before continue, otherwise,
        // doing continue first will just skip this code.
        eggsRemoved++;
        continue;
      }

      result.push(foods[i]);
    }

    return result;
  }

  console.log(removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']));

*/


//Ex 6

const foods = ['egg', 'apple', 'egg', 'egg', 'ham']

function removeEggs(foods) {
    const newBasket = foods.reverse()
    const result = [];
    let removedEggs = 0
    for (let i = 0; i < newBasket.length; i++) {
     if (newBasket[i] === 'egg' && removedEggs < 2) {
        removedEggs++
        continue;
     }   
     result.push(newBasket[i])
    }
    return result
}

console.log(removeEggs(['egg', 'apple', 'egg', 'egg', 'ham', 'apple', 'egg', 'egg', 'ham']))
