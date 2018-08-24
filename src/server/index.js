const MongoClient = require('mongodb').MongoClient;
const createExpressApp = require('./create-express-app');

require('dotenv').config();

MongoClient.connect(process.env.DB_CONN, (err, client) => {
  console.log('connect to mongodb...');
  database = client.db('contacts-manager-app');
  
  createExpressApp(database)
    .listen(3000, () => {
      console.log('listening on port 3000...');
    });
});