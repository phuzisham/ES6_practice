let users = [
  { name: 'Jacko' },
  { name: 'Veronica'},
  { name: 'Kingsley'}
];

let user;

// ES5 ------- start

for (let i = 0; i < users.length; i++) {
  if (users[i].name === 'Jacko') {
    user=users[i];
    break;
  }
}

// ES5 ------- end

// ES6 ------- start

users.find(function(user) {
  return user.name === 'Veronica';
});

// Example 2

function Car(model) {
  this.model = model;
}

let cars = [
  new Car('Buick'),
  new Car('Camaro'),
  new Car('Focus')
];

cars.find(function(car) {
  return car.model === 'Focus';
});

// Example 3

let posts = [
  { id: 1, title: 'New Post' },
  { id: 2, title: 'Old Post'}
];

let comment = { postId: 1, content: 'Huh?' };

function postForComment(posts, comment) {
  return posts.find(function(post) {
    return post.id === comment.postId;
  });
}

// ES6 ------- end
