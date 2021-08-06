//---------------1-------//
let arr = [100, 52, 333];

function sumOfNumbers(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
console.log(sumOfNumbers(arr));


//----------2----------//
function sumTo(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

console.log( sumTo(1000) );

//-------------3--------//
function sumOfNumber(number) {
    const stringNumber = String(number);
    let sum = 0;

    for(let i = 0; i < stringNumber.length; i++){
        sum += Number(stringNumber[i]);
    }
    return sum;
}

const number = 1990;
console.log(sumOfNumber(number));


