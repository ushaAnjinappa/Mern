// Add Cart
const products = [
  {
    name: "Smartphone",
    price: 599.99,
    quantity: 10,
    category: "Electronics",
    sku: "PHN123",
  },
  {
    name: "Jeans",
    price: 49.99,
    quantity: 20,
    category: "Fashion",
    sku: "JNS456",
  },
  {
    name: "Laptop",
    price: 899.99,
    quantity: 5,
    category: "Electronics",
    sku: "LPT789",
  },
  {
    name: "Sneakers",
    price: 79.99,
    quantity: 15,
    category: "Fashion",
    sku: "SNK101",
  },
];
class Product {
  constructor() {
    this.cartItem = [];
  }

  addToCart(sku, qty) {
    const item = products.find((prod) => prod.sku == sku);
    let sum = 0;
    item.quantity = qty;
    item.totalPrice = item.price * qty;
    this.cartItem.push(item);

    // for (let idx = 0; idx >= item.totalPrice; idx++)
    //   item.grandTotal = item.totalPrice[idx] + item.totalPrice;
    // console.log(item.grandTotal);
    // console.log(item);
    // // console.log("Prodcuts here");
  }

  grandTotal() {
    let grandTotal = 0;
    const subtotals = products.map((total) => {
      const subtotal = total.quantity * total.price;
      grandTotal += subtotal;
      return subtotal;
      console.log(subtotal);
      console.log("grandtotal", grandTotal);
    });
  }

  removeCart(category) {
    const prodct = products.find((pro) => (pro.category = category));
    this.cartItem.pop(prodct);
    console.log(prodct);
  }
}

const p1 = new Product();
p1.addToCart("SNK101", 1);
p1.addToCart("JNS456", 2);
p1.removeCart("fashion");
p1.grandTotal();
console.log(p1.cartItem);
