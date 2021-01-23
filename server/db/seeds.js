const { Db } = require("mongodb");

use educationApp;
db.dropDatabase();


db.favourites.insertOne({
  englishName: "Sun"
})