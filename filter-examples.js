let products = [
  { name: 'cucumber', type: 'vegetable', quantity: 0, price: 1 },
  { name: 'celery', type: 'vegetable', quantity: 10, price: 15 },
  { name: 'banana', type: 'fruit', quantity: 30, price: 13 },
  { name: 'orange',   type: 'fruit', quantity: 3, price: 5  }
];

let filteredProducts = [];

// ES5 ------- start

for (let i = 0; i < products.length; i++) {
  if (products[i].type === 'fruit') {
    filteredProducts.push(products[i]);
  }
}                                          // returns 2 products orange/banana

// ES5 ------- end

// ES6 ------- start

products.filter(function(product) {
  return product.type === 'vegetable';
});                                       // returns 2 products cucumber/celery

// fat arrow
products.filter(product => product.type === 'fruit');  // returns 2 products cucumber/celery

// type is vegetable, quantity is > 0, price is < 16

products.filter(function(product) {
  return product.type === 'vegetable'
    && product.quantity > 0
    && product.price < 16
});                                  // returns 1 product celery

// fat arrow
products.filter(product => {
  return product.type === 'vegetable'
  && product.quantity > 0
  && product.price < 156
});                                  // returns 1 product celery

// ES6 ------- end
