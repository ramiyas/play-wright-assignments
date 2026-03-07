
function findNumberType(num){
     if(num==0) {
       return "number is zero"
    }
     else if(num<0){
        return "number is negative"
    }
    else {
        return "number is positive"
    }
    
    }
var num = 0;
var result = findNumberType(num)
console.log(num+" "+ result)
num =-2;
result = findNumberType(num)
console.log(num+" "+ result)
num = 3;
result = findNumberType(num)
console.log(num+" "+ result)