
interface Flyable {
    fly(): string;
}

interface Eatable {
    eat():string;
}
class Bird implements Flyable ,Eatable {
    public fly(): string {
        return 'Bird is flying'
    }
    public eat():string {
        return 'eat'
    }
}
class AirPlane implements Flyable {
    public fly(): string {
        return 'AirPlane is flying'
    }
}
let flyRef:Flyable;
flyRef = new Bird();
console.log(flyRef.fly());

flyRef = new AirPlane();
console.log(flyRef.fly());


let flyRef1 = new Bird() as Flyable
console.log(flyRef1.fly());
let eatRef = new Bird() as Eatable;
console.log(eatRef.eat())

flyRef1 =new AirPlane() as Flyable;
console.log(flyRef1.fly());