var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var price = Math.floor((Math.random() * 100) + 1)
 //return Object.assign({}, cart, {[item]: price})
 var obj = {[item]: price}
 cart.push(obj)
 return cart
 return console.log(`"${item} has been added to your cart."`)
 }

function viewCart() {
  // write your code here
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
