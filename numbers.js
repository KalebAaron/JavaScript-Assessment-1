//1. provide the sum of the following variables 
var num10 = 10;
var string8 = '8';
var one = 1;
function addNumbers(x,y,z){
  var sum = Number(x)+Number(y)+Number(z)
  return sum;
}
addNumbers(num10, string8, one)
//2. write a loop that will log only numbers divisible by 3 between 20 - 100

for (var i = 20; i < 101; i++) {
 if(i%3 == 0){
   console.log(i)
 }
}
divideByThree()

// var arr1 = []
// function divideByThree(arr){
//   var num = 20
//   while(num<101){
//     if((num%3)===0){
//       arr1.push(num)
//     }
//     num++
//     }
//     for(var i = 0; i<arr1.length; i++){
//       var x = 0
//       x+=arr1[i]
//     }
//     console.log(arr1.join())
// }
// divideByThree()


//3. find the class average given the following test scores

var scores = [88, 84, 100, 92, 70, 76, 76, 84, 86, 98]; 

var x = 0

function average(arr){
  for(var i=0; i<arr.length; i++){
    x+=arr[i]
  }
  return x/(arr.length)
}
average(scores)