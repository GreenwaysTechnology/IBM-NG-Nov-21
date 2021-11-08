class Product {
    constructor(public productId: string = "P001", public productName: string = "pname") { }
}
class Order {
    //order has product
    constructor(public orderId: string = "0AA", public product?: Product) { }
}

let product = new Product();
let order = new Order('A001', product);
console.log(order.orderId, order.product.productName)

order = new Order();
console.log(order.orderId, order?.product?.productName ?? "default Product")