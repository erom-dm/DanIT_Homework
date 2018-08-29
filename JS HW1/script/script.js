let name = prompt("what is your name?");
let age = prompt("what is your age?");


if(age > 0 && age < 18){
    alert("you're underage");
} else if (age >= 18 && age < 22){
    let confirmation = confirm("Are you sure you want to enter?");
    if (confirmation === false){
        alert("Good. Keep out.");
    }else if (confirmation === true){
        alert("Welcome " + name + "!");
    }
} else if (age >= 22){
    alert("Welcome " + name + "!");
}

