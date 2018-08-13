const express = require('express');
const app = express();
const bodyParse = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const path = require('path');

require('dotenv').config();

app.use(bodyParse.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/profiles', express.static(path.join(__dirname, 'profiles')));

let database;

MongoClient.connect(process.env.DB_CONN, (err, client) => {
  console.log('connect to mongodb...');

  app.listen(3000, () => {
    database = client.db('contacts-manager-app');
    console.log('listening on port 3000...');
  });
});

app.get('/api/contacts', (req, res) => {
  const collection = database.collection('contacts');
  collection.find({}).toArray((err, item) => res.json(item));
});

app.post('/api/contacts', (req, res) => {
  const user = req.body;

  const collection = database.collection('contacts');

  collection.insertOne(user, (err, result) => {
    if(err) {
      return res.status(500).json({ error: 'Error inserting new recording.' });
    }

    const newRecord = result.ops[0];
    return res.status(201).json(newRecord);
  });
});

app.get('*', (req, res) => {
  return res.sendFile(path.join(__dirname, 'public/index.html'))
});