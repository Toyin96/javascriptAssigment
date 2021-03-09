const arg = prompt("Kindly enter an array: ", )

function rotate(arg){
    const len = arg.length;

    const firstElement = arg[0];

    for(i = 1; i <= arg.length; i++){
        arg[i - 1] = arg[i];
    }

    arg[arg.length - 1] = firstElement;
}


console.log(rotate(arg));