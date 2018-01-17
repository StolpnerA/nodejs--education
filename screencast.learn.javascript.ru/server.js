let db = require('db');
db.connect();
let User = require('./User');
let log = require('logger')(module);

function run() {
  let vasya = new User('Vasya');
  let andrei = new User('Andrei');
  vasya.hello(andrei);
  log(db.getPhrase('run successful'));
}

if (module.parent) {
  exports.run = run;
} else {
  run();
}