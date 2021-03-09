function addWithSubcharge(amount1, amount2){
    let amnt1;
    let amnt2;

    if(amount1 <= 10){
        amnt1 = 1 + amount1;
    }else if(amount1 > 10){
        amnt1 = 2 + amount1;
    }

    if(amount2 <= 10){
        amnt2 = 1 + amount2;
    }else if(amount2 > 10){
        amnt2 = 2 + amount2;
    }

    return amnt1 + amnt2;
}

let amount1 = prompt("Enter first element",)
let amount2 = prompt("Enter second element", )
amount1 = parseFloat(amount1);
amount2 = parseFloat(amount2);

console.log(addWithSubcharge(amount1, amount2));