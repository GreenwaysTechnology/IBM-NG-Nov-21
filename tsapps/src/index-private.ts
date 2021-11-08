class Auth {
    private password: string = "abcd000"

    private generatePassword() {
        return this.password;
    }
    public getPassword() {
        return this.generatePassword();
    }
}
let auth = new Auth()
// console.log(auth.password)
//  console.log(auth.generatePassword())
console.log(auth.getPassword())