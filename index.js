var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var price = Math.floor((Math.random() * 100) + 1)
 var obj = {[item]: price}
 cart.push(obj)

 return cart
 console.log("${item} has been added to your cart.")
 }

function viewCart() {
  // write your code here
  for (i = 0, var l = cart.length; i < l; i++) {
    if (l === 0) {
      return "Your shopping cart is empty."
    }
    else {
      return `"In your cart, you have $"`
    }
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
