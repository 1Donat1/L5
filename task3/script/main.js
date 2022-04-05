'use strict'
let num=+prompt('Введите число ');
if(num<=1){
    alert(NaN);
}
let del=2;
while(num % del !==0){
    del=del+1;
}
alert(del);

