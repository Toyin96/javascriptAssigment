function checkIntegers(arg1, arg2){
    if (arg1 >= 0){
        console.log(`${arg1} is a positive integer`);
    }else{
        console.log(`${arg1} is a negative integer`);
    }

    if (arg2 >= 0){
        console.log(`${arg2} is a positive integer`);
    }else{
        console.log(`${arg2} is a negative integer`);
    }
}

const arg1 = parseInt(prompt("Enter first number to examine: ", ));
const arg2 = parseInt(prompt("Enter second number to examine ", ));

sonsole.log(checkIntegers(arg1, arg2));