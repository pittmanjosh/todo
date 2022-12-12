const { MongoClient } = require("mongodb");
require("dotenv").config();
const PW = process.env.MONGODB_PW;
const Db = `mongodb+srv://master:${PW}@cluster0.q9g2evm.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(Db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

var _db;

module.exports = {
  connectToServer: function (callback) {
    client.connect(function (err, db) {
      // Verify we got a good "db" object
      if (db) {
        _db = db.db("app1");
        console.log("Successfully connected to MongoDB.");
      }
      return callback(err);
    });
  },

  getDb: function () {
    return _db;
  },
};
