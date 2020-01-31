// ES5 ------- ES5

function createBookShop(inventory) {
  return {
    inventory: inventory,
    inventoryValue: function() {
      return this.inventory.reduce((total, book) => total + book.price, 0);
    },
    priceForTitle: function(title) {
      return this.inventory.find(book => book.title === title).price;
    }
  };
}

const inventory = [
  { title: 'Grapes of Wrath', price: 10 },
  { title: 'Notes From Underground', price: 15 }
];

const bookShop = createBookShop(inventory);

bookShop.inventoryValue(); // = 25

bookShop.priceForTitle('Grapes of Wrath'); // = 10

// ES5 ------- ES5
