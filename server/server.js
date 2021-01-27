const express = require('express');
const app = express();
const parser = require('body-parser');
app.use(parser.json())
const cors = require('cors');
app.use(cors());

const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');

MongoClient.connect('mongodb://localhost:27017')
  .then((client) => {
    const db = client.db('educationApp');
    const favouritesCollection = db.collection('favourites');
    const mailingListCollection = db.collection('mailinglist');
    const favouritesRouter = createRouter(favouritesCollection);
    const mailingRouter = createRouter(mailingListCollection);  
    app.use('/api/favourites', favouritesRouter);
    app.use('/api/mailinglist', mailingRouter);
  })
  .catch(console.err);

app.listen(3000, function () {
  console.log(`Listening on port ${ this.address().port }`);
})