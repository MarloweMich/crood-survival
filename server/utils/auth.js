const jwt = require('jsonwebtoken');

const secret = 'mysecretssshhhhhhh';
const expiration = '2h';

module.exports = {
  signToken: function ({ email, username, _id }) {
    const payload = { email, username, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
<<<<<<< HEAD
};
=======
};
>>>>>>> 22f0ee65b3b16c9e00cd196102b14625a916e4e5
