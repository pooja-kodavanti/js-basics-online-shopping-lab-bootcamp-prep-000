var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var price = Math.floor((Math.random() * 100) + 1);
 var obj = {[item]: price};
 cart.push(obj);

 console.log(`${item} has been added to your cart.`);
 return cart
 }

function viewCart() {
  // write your code here
  let itemsWithPrices = []
  for (i = 0, var l = cart.length; i < l; i++) {
    if (l === 0) {
      return "Your shopping cart is empty."
    }
    else {
      var itemWithPrice = cart[i]
      var item = Object.keys(itemWithPrice)
      var price = itemwithPrice[item]

      itemsWithPrices.push(`${item} at $${price}`)
    }
  }
  if (itemsWithPrices.length = 1) {
    console.log(`In your cart, you have ${itemsWithPrices[0]}.`)
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
