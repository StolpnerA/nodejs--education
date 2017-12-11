let User = require('./User/index');

let vasya = new User.User('Vasya');
let petya = new User.User('Petya');

vasya.hello(petya);
