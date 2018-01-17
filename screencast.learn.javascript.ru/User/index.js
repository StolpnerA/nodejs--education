let db = require('db');
let log = require('logger')(module);

class User {
  constructor(user) {
    this.name = user;
  }

  hello(who) {
    log(`${db.getPhrase('hello')} ${who.name}`);
  }
}

module.exports = User;
