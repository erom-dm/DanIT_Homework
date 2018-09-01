function User(){
    this.firstName = prompt("give me first name: ");
    this.lastName = prompt("give me last name: ");
    this.getLogin = function () {
        return (this.firstName.slice(0,1) + this.lastName).toLowerCase();
    }
}
user1 = new User();

alert(user1.getLogin());