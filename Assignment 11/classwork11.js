function sandwichCalculator(arg){
    return arg/2;
}


function sandwichCalculatorOne(slicesOfBread , slicesOfCheese){
    let numberOfBread = sandwichCalculator(slicesOfBread);
    let numberOfSandwich = 0;

    if (numberOfBread > slicesOfCheese){
        numberOfSandwich =  slicesOfCheese;
        return console.log(`You can make ${numberOfSandwich} sandwiches`)
    }else if(slicesOfCheese > numberOfBread && slicesOfCheese > 1){
        console.log(`You can make ${numberOfBread} sandwiches`)
    }else if(slicesOfCheese > numberOfBread && slicesOfCheese == 1){
        console.log(`You can make ${numberOfBread} sandwich`)
    }
}

const bread = parseInt(prompt("Enter number of bread: "))
const cheese = parseInt(prompt("Enter number of cheese: "))

sandwichCalculatorOne(bread, cheese);