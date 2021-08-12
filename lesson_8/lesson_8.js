function  createFunc() {
   let cube = function (x) {
      return x + x + x ;
   };

   return cube;
}
//console.log(createFunc());

let powerOfThree = createFunc();

console.log(powerOfThree(123));


//замыкание

function create(y) {
    console.log(y);
   function add(x) {
    return y + x;
   }

   return add;
}

let result = create(3);
console.log(result(10));


//анонимные функции

(function f() {
    console.log("it's anonim function");

})();

function cube(x, callback) {
   return callback(x);
}

console.log(cube(3,function (y) {
    return y * 2;
}));


//forEach

let cars = ['audi', 'reno', 'pegout', 'mersrdes', 'ferrari','bugatti'];
cars.forEach(function (item,index) {
  console.log(item, index);
});


//Array.filter

let filter = cars.filter(function (item,index) {
   return index % 2 === 0;
});
console.log(filter);

// Map

let map = cars.map(function (item, index) {
   return item.toUpperCase()
});
console.log(map);


//reduce

let reduce = cars.reduce(function (prev,item) {
   return prev + item;
});

console.log(reduce);

// every// some

let every = cars.every(function (item) {
    return typeof (item) === String;
});

console.log(every);

let some = cars.some(function (item) {
   return item.length;
});

console.log(some);

// find

let find = cars.find(function (item) {
  return item.length === 8;
});

console.log(find);

// findIndex

let findIndex = cars.findIndex(function (item) {
    return item === 3;
});

console.log(findIndex);


// sort

function sorting(first, second) {
  if(first.length > second.length) return 1
  else if (first.length < second.length) return -1
    else return 0
}

let sort = cars.sort(2);
console.log(sort);