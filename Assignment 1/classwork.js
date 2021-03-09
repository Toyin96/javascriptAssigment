function numChecker(num1, num2){
    if (num1 === 50 || num2 === 50){
        return true;
    }else if(num1 + num2 === 50){
        return true;
    }else{
        return false;
    }
}

const num1 = parseInt(prompt("Enter first number to compare: ", ));
const num2 = parseInt(prompt("Enter second number to compare: ", ));

console.log(numChecker(num1,num2));