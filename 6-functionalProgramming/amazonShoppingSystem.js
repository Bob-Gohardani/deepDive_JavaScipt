/*
Functional Programming is about separation of concerns.
functions operate on well defined data structures like functions and objects, rahter
than belonging to that object.
*/

// Amazon Shopping
const user = {
  name: "Kim",
  active: true,
  cart: [],
  purchases: []
};


/*
Purchase Item => Implement a cart feature
1. add item to cart
2. add 25% tax to cart
3. buy item: cart --> purchase
4. empty cart
*/

const compose = (f, g) => (...args) => f(g(...args));

// here we chain the functions and feed result of each one to the next function
// reducer : 1,2,3,4 => ((1+2 )+ 3) + 4 => 10  
const purchaseItem = (...fns) => fns.reduce(compose)

const addItemToCart = (user, item) => {
  const updatedCart = user.cart.concat([item])
  return Object.assign({}, user, { cart: updatedCart })
};

const applyTaxToItem = (user) => {
  const { cart } = user
  const taxRate = 1.3
  const updatedCart = cart.map(item => {
    return {
      name: item.name,
      price: item.price * taxRate
    }
  })

  return Object.assign({}, user, { cart: updatedCart })
}

const BuyItem = (user) => Object.assign({}, user, { purchases: user.cart })

const emptyCart = (user) => Object.assign({}, user, { cart: [] })

let res = purchaseItem(
  emptyCart,
  BuyItem,
  applyTaxToItem,
  addItemToCart
  // ...args
)(user, { name: 'laptop', price: 200 })

console.log(res)