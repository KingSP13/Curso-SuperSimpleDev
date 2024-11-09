import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js'
/* 

//Ex 1 - get the date 5 days after today in <Month> and <Day of the Month> format

const today = dayjs().add(5, 'days')
const requestedDate = today.format('MMM - DD')

console.log(requestedDate)

//Ex 2 - Calculate 1 month aftere today, samr format as 15.1

const today = dayjs().add(1, 'month')
const requestedDate = today.format('MMM - DD')

console.log(requestedDate)

//Ex 3 - Use .subtract method to calculate 1 month before today

const today = dayjs().subtract(1, 'month')
const requestedDate = today.format('MMM - DD')

console.log(requestedDate)

//Ex 4 - Get the date and display it in the day of the week format

const today = dayjs()
const requestedDate = today.format('dddd')

console.log(requestedDate)

//Ex 6 - Create a funtion that takes the DayJS object and returns whether the date is 'Saturday' or 'Sunday'

const date = dayjs('04-25-1998')
let estimatedDate = date.format('d')
console.log(estimatedDate)


const isWeekend = () => {
    
    if (estimatedDate === '0' || estimatedDate === '6') {
        if (estimatedDate === '0') {
            return 'Today is Sunday, It is Weekend !'
        } else {
            return 'Today is Saturday, It is Weekend !'
    }
} else {
    return "It's not weekend"
}
}

console.log(isWeekend())

//Simplificado com ChatGPT:

const date = dayjs('04-25-1998');
let estimatedDate = date.format('d');

const isWeekend = () => {
    return estimatedDate === '0' ? 'Today is Sunday, It is Weekend!' :
    estimatedDate === '6' ? 'Today is Saturday, It is Weekend!' :
    "It's not weekend";
}

console.log(isWeekend());
*/

//Ex 7 - export isWeekend function and import from a separate file:

import isSatSun  from './isWeekend.js'

const date = dayjs('04-25-1998');
const formatedDate = date.format('d');


console.log(isSatSun(formatedDate));