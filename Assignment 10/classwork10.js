function sumAndMultiplyArrayElements(arg){
    let product = 1;
    let sum = 0;
    for (let i = 0; i < arg.length; i++){
        sum += arg[i];
        product *= arg[i];
    }
    console.log(`The sum is ${sum} while the product is ${product}`);
}

const array = [1,2,3,4,5,6,7,8,9];
sumAndMultiplyArrayElements(array);