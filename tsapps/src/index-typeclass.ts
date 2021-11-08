//object types
//class

//class as object type:
class User {
    id: number;
    name: string;
}

let user: User = {
    id: 1,
    name: 'Subramanian'
}
//interface as type
interface Order {
    id: number;
    value: number;

}
let order: Order = {
    id: 1,
    value: 13
}

//type keyword

type Product = {
    id: number;
    name: string;
}
let product: Product = {
    id: 1,
    name: 'phone'
}
/////////////////////////////////////////////////////////////////////////////////////
interface Settings {
    id: number | string;
    location?: string;
    drive?: string;
    url?: string;
    username?: string;
    password?: string;
}

let webserver: Settings = {
    id: 1,
    location: 'google.com'
}

