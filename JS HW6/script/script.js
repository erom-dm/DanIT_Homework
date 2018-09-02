function User(){
    this.getLogin = function () {
        return (this.firstName.slice(0,1) + this.lastName).toLowerCase();
    };

    this.setFirstName = function (name) {
        Object.defineProperty(this, 'firstName', {
            value: prompt("Give me first name: "),
            writable: true
        });

        Object.defineProperty(this, 'firstName', {
            writable: false
        })
    };

    this.setLastName = function (name) {
        Object.defineProperty(this, 'lastName', {
            value: prompt("Give me first name: "),
            writable: true
        });

        Object.defineProperty(this, 'lastName', {
            writable: false
        })
    };



}

user1 = new User();
user1.setFirstName();
user1.setLastName();

alert(user1.getLogin());