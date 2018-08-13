require('dotenv').config();

const MongoClient = require('mongodb').MongoClient;
const bcrypt = require('bcrypt');

const users = require('./users');
const contacts = require('./contacts');


function seedCollection(dbName, collectionName, initialRecords) {

  MongoClient.connect(process.env.DB_CONN, (err, client) => {
    console.log(process.env.DB_CONN);
    console.log(client);

    const col = client.db(dbName).collection(collectionName);
    col.remove();

    initialRecords.forEach((item) => {
      if (item.password) {
        item.password = bcrypt.hashSync(item.password, 10);
      }
    });

    console.log('inserting records...');

    col.insertMany(initialRecords, (err, result) => {
      console.log(`${result.insertedCount} records inserted.`);
      console.log('closing connection...');
      client.close();
      console.log('done.');
    });
  });
}


seedCollection('contacts-manager-app', 'users', users);
seedCollection('contacts-manager-app', 'contacts', contacts);
