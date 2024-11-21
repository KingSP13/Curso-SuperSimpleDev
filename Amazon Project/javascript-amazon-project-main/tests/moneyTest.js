import {formatCurrency} from '../scripts/utils/money.js';

console.log('Test suite: formatCurrency');

console.log('converts cents into dollars');

if (formatCurrency(2095) == '20.95') {
    console.log('Passed')
} else {
    console.log('Failed')
}

console.log('works with 0')

if (formatCurrency(0) === '0.00') {
    console.log('Passed')
} else {
    console.log('Failed')
}

console.log('rounds up, to the nearest cent')

if (formatCurrency(2000.5) === '20.01') {
    console.log('Passed')
} else {
    console.log('Failed')
}

console.log('rounds down, to the nearest cent')

if (formatCurrency(2000.4) === '20.00') {
    console.log('Passed')
} else {
    console.log('Failed')
}