let num1, num2, target;

num1 = parseInt(prompt("Give me a first number: "));
num2 = parseInt(prompt("Give me a second number: "));
do{
    target = parseInt(prompt("Give me an Nth element to find: "));
} while (target === 0);


if (target === 1){
    alert(num1);
} else if (target === 2){
    alert(num2);
} else {
    alert(fib(num1, num2, target-2));
}


function fib(num1, num2, target) {
    if (target === 0) {
        return num2;
    }
    if (target > 0) {
        return fib(num2, num1 + num2, target - 1);
    }
}
