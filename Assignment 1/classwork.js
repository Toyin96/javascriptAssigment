function numChecker(num1, num2){
    if (num1 === 50 || num2 === 50){
        return true;
    }else if(num1 + num2 === 50){
        return true;
    }else{
        return false;
    }
}

console.log(numChecker(20,20));