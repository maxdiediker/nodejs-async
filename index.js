var wait = require("./wait");
var async = require("async");

var fib = [1,1,2,3,5,8,11];
var output = [];

//D:/school/itc298/week2
// sync loop--------------------------
// fib.forEach(function(item){
//   output.push(item * 2);
// });
// console.log("fast  " , output);


//brokern async loop-------------------------
//nothing blocking before it gets to console log
// fib.forEach(function(item){
//   wait.wait(item, function(err,data) {
//     output.push(item * 2);
//   });
// });
//
// console.log("async attempt..1...", output);
//------------------------
// wait.wait("information", function(err,data) {
//   console.log(data);
// });

//real async loop, uses different built in Each-------------------------

async.each(fib, function(item, callback){
  wait.wait(item, function(err, data) {
    // callback(null, data * 2);
    output.push(item * 2);
  });
});
console.log("async attempt..2...", output);

// var friends = ["Mike", "Stacy", "Andy", "Rick"];
//
// friends.forEach(function (eachName, index){
// console.log(index + 1 + ". " + eachName);
// });
// 1. Mike, 2. Stacy, 3. Andy, 4. Rick
