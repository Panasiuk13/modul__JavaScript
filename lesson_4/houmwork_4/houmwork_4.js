let arr = [];
for (let i = 2; i <= 20; i+=2){
    arr.push(i);

}
console.log(arr);


//-------2----///
let arr = [];
for (let i = 0; i < 20; i++){
    arr.push((i*5));
}

console.log(arr);

//-------3------///

let inputArr = [];
for (let i = 0; i < 3; i++){
    const userNumber = Number(prompt('Enter number: ' + (i + 1)));
    inputArr.push(userNumber);
}

// inputArr

let largest = 0;
for (let i = 0; i < inputArr.length; i++) {
    if (inputArr[i] > largest) {
        largest = inputArr[i]
    }
}
console.log(largest);