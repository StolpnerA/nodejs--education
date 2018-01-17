let phrases = require('./ru.json');
class User {
  constructor(user) {
    this.name = user;
  }

  hello(who) {
    console.log(`${phrases.hello} ${who.name}`);
  }
}

exports.User = User;
