const mongoose = require('mongoose');

<<<<<<< HEAD
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/crood-survival', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
=======
mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/crood-survival',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
>>>>>>> 22f0ee65b3b16c9e00cd196102b14625a916e4e5

module.exports = mongoose.connection;
