let firstNum, secondNum;

do{
    firstNum = parseInt(prompt("Give me a first number > 1: "));
    secondNum = parseInt(prompt("Give me a last number"));
} while (!checkInput(firstNum) || !checkInput(secondNum) || firstNum > secondNum);

let resultArr = [];

for (let i = firstNum; i <= secondNum; i++){
    if (checkPrimeNum(i)){
        resultArr.push(i);
    }
}

if (resultArr.length === 0){
    alert("No simple numbers in range")
} else {
    alert(resultArr);
}





function checkInput(num){
    if (num < 1 || num % 1 !== 0) {
        return false;
    } else {
        return true;
    }
}

function checkPrimeNum(num) {
    for (let i = 1; i <= num; i++){
        if (num % i === 0 && i !== 1 && i !== num){
            return false;
        }
    }
    return true;
}