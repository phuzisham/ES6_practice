let products = [
  { name: 'cucumber', type: 'vegetable', quantity: 0, price: 1 },
  { name: 'celery', type: 'vegetable', quantity: 10, price: 15 },
  { name: 'banana', type: 'fruit', quantity: 30, price: 13 },
  { name: 'orange',   type: 'fruit', quantity: 3, price: 5  }
];

let filteredProducts = [];

// ES5 Example

for (let i = 0; i < products.length; i++) {
  if (products[i].type === 'fruit') {
    filteredProducts.push(products[i]);
  }
}

// ES6 example 1

products.filter(function(product) {
  return product.type === 'fruit';
});

// ES6 example 2 -- type is vegetable, quantity is > 0, price is < 10

products.filter(function(product) {
  return product.type ==== 'vegetable'
    && product.quantity > 0
    && product.price < 10
});

// ES6 example 3

let post = { id: 4, title: 'New Post' };
let comments = [
  { postID: 4, content: 'awesome post' },
  { postID: 3, content: 'it was ok' },
  { postID: 4, content: 'neat' }
];

function commentsForPost(post, comments) {
  return comments.filter(function(comment) {
    return comment.postID === post.id;
  });
}
