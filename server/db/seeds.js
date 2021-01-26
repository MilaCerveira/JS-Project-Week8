const { Db } = require("mongodb");

use educationApp;
db.dropDatabase();


db.favourites.insertOne({
  englishName: "Sun"
})

db.mailinglist.insertOne({
  firstName: 'Jamie',
  lastName: 'Malcolm',
  email: 'jmalcolm281@gmail.com'

})