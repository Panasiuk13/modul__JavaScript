var num = "" + 1 + 0;

//console.log(num);--> 10

var num = "" - 1 + 0;

//console.log(num);--> -1

var num = true + false;

//console.log(num);--> 1

var num = 6 / "3";

//console.log(num);--> 2

var num = "2" * "3";

//console.log(num);--> 6

var num = 4 + 5 + "px";

//console.log(num);--> 9px

var num = "$" + 4 + 5;

//console.log(num);--> $45

var num = "4" - 2;

//console.log(num);--> 2

var num = "4px" - 2;

//console.log(num);--> Nan

var num = 7 / 0;

//console.log(num);--> Infinity

var num = "  -9\n" + 5;

//console.log(num);--> -9
 //                      5

var num = "  -9\n" - 5;

//console.log(num);--> -14

var num = null + 1;

//console.log(num);--> 1

var num = undefined + 1;

//console.log(num);--> NaN


var num = null == "\n0\n";

//console.log(num);--> false