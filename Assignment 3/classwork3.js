function areaOfScaleneTriangle(len1, len2, len3){
    const initialArea = (len1 + len2 + len3)/2;
    const area = (initialArea * (initialArea - len1)*(initialArea - len2)*(initialArea - len3));
    console.log(`${Math.sqrt(area).toFixed(2)}`);
}

let len1 = parseFloat(prompt("Enter first length: ", ));
let len2 = parseFloat(prompt("Enter second length: ", ));
let len3 = parseFloat(prompt("Enter third length: ", ));

console.log(areaOfScaleneTriangle(len1, len2, len3));