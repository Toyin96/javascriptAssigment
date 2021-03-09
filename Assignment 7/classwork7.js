function computeTwoNum(num1, num2){
    if (num1 === num2){
        return 3 * (num1 + num2);
    }else{
        return num1 + num2;
    }
}

let num1 = parseFloat(prompt("Enter first number: ", ));
let num2 = parseFloat(prompt("Enter second number: ", ));

console.log(computeTwoNum(num1, num2));