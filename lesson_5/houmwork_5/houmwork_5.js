//-----1-----//

let obj = {a: 1, b: 2, c: 3};
console.log(obj['c']);
console.log(obj.c);

for (let key in obj);

console.log(obj);


//------2------//

let city = {};
city.name = "";
city.population = "";


console.log(city);

//------3-----//

let result = [];
for(let i = 0; i < 6; i++ ){
    let objCopy = Object.assign({}, city);
    result.push(objCopy);
}

result[0].name = 'Minsk';
result[0].population = 2000000;

result[1].name = 'Brest';
result[1].population = 360000;

result[2].name = 'Vitebsk';
result[2].population = 200000;

result[3].name = 'Grodno';
result[3].population = 200000;

result[4].name = 'Gomel';
result[4].population = 200000;

result[5].name = 'Mogilev';
result[5].population = 200000;

console.log(result);

//-----4---//

function getCity(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i].name, arr[i].population);

    }
}
    getCity(result);


