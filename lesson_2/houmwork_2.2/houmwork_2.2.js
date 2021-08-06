const userNumber1 = Number(prompt());

let sum = 0;

for( let number = 1; number <= userNumber1; number++){
    sum += number;
}
console.log(sum);


var x = 0;
for ( var x = prompt() ; x > 0; x --){
   if( x % 2 === 0) {
      console.log(x);
   }

}


const x = Number(prompt(''));

let number = x;

while (number >= 0){
    if(number % 2 === 0){
        console.log(number);
    }
    number --;
}

