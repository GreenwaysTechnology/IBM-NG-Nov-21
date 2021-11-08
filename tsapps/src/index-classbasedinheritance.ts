//base class
class Account {
    constructor() {
        console.log('account class')
    }
    deposit() {
        return 10;
    }
}
class SavingsAccount extends Account {
    constructor() {
        super();
        console.log('savings account class')
    }
    //overriding
    deposit() {
        return 100 * super.deposit();
    }
}
let sb = new SavingsAccount()
console.log(sb.deposit())