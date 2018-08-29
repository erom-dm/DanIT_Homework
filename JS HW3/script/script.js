let input;
do{
    input = parseInt(prompt("Give me a number: "));
} while (input < 1);


function factorial(num) {
    if(num === 1){
        return 1;
    } else{
        return num * factorial(num-1);
    }
}

alert(factorial(input));