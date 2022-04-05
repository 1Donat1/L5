'use strict'
//1
// for (let a=1;a<101;a++){
//     console.log(a);
// }
//2
// for (let a=100;a>0;a--){
//     console.log(a);
// }
//3
let a=0;
// for(;;){
//     a++
//     if(a % 2 === 0 ){
//         console.log(a);
//     }
   
//     if(a>101){
//         break;
//     }

// }
//4
// const arr = [1, 2, 3, 4, 5];
// let sum=0;
// for(let i=0;i<arr.length;i++){
//     sum+=arr[i];
// }
// alert(sum);
//5
const arr = [1, 2, 3, 4, 5];
let sum=0;
for(let i=0;i<arr.length;i++){
 sum+=arr[i] * arr[i];

}
alert(sum);