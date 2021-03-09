function getFirstArrayElement(){
    let array = [];
    let count = 0;

    while (count < 5){
        let input = parseInt(prompt("Enter values"));
        array.push(input)
        count++;
    }

    return array.shift();
}

console.log(getFirstArrayElement())
