const mongodb = require('mongodb');
const api = require('./api');
const MongoClient = mongodb.MongoClient;

const dbUrl = 'mongodb://' + your mlab credentials + '.mlab.com:11622/image_search';

module.exports = {
  newSearch: (query, page, callback) => {
    MongoClient.connect(dbUrl, (error, db) => {
      if (error) throw error;

      const collection = db.collection('history');
      const date = new Date();

      collection.insert({
        "searchString": query,
        "timestamp": date.toString()
      });

      db.close();
    });

    api(query, page, callback);
  },

  pastSearch: (callback) => {
    MongoClient.connect(dbUrl, (error, db) => {
      if (error) throw error;

      const collection = db.collection('history');

      collection.find(
                  {},
                  { searchString: 1, timestamp: 1, _id: 0 }
                )
                .sort({ "timestamp": -1 })
                .limit(20)
                .toArray( (error, documents) => {
                  if (error) throw error;

                  db.close();
                  callback(documents);
                });
    });
  }
}
