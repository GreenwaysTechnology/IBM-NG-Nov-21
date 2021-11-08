abstract class Animal {
    abstract eat();
    saveAnimal() {
        return 'Save Animals from hunters'
    }
}

class Tiger extends Animal {
    public eat() {
        console.log('eat')
    }

}
let animal = new Tiger() as Animal;
console.log(animal.saveAnimal());
animal.eat()