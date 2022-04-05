'use strict'
let num=prompt('Введите число');

if(num!==null && !isNaN(+num) && +num>1 ){
    num=Number(num);

    let simpleNumber=true;

    for(let i=2;i<num;i+=1){
        if(num % i===0){
        simpleNumber=false;
        break;
    }
    }
    if(simpleNumber){
        alert('Простое')
    }
    else{
        alert('Не простое')
    }

}