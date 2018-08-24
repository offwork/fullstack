const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const checkJwt = require('express-jwt');

function apiRouter(database) {
  const router = express.Router();

  router.use(
    checkJwt({ secret: process.env.JWT_SECRET })
      .unless({ path: '/api/authenticate' }));

  router.use((err, req, res, next) => {
    if (err.name === 'UnauthorizedError') {
      return res.status(401).send({error: err.message});
    }
  });

  router.get('/contacts', (req, res) => {
    const collection = database.collection('contacts');
    collection.find({}).toArray((err, item) => res.json(item));
  });

  router.post('/contacts', (req, res) => {
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

  router.post('/authenticate', (req, res) => {
    const user = req.body;
    const userCollection = database.collection('users');
    userCollection
      .findOne({username: user.username}, (err, result) => {
        if(!result) {
          return res.status(404).json({ error: 'user not found!' });
        }

        if(!bcrypt.compareSync(user.password, result.password)) {
          return res.status(401).json({ error: 'incorrect password' });
        }

        const token = jwt.sign(
          {
            username: result.username,
            admin: result.admin 
          }, 
          'tznp5ws17TyuZWl7cey937ncmfLRdZwEkWHDMSnBmR6xq62uQZBdm8h8lxUVjuO', 
          { 
            expiresIn: '1h'
          }
        );

        return res.json({
          message: 'successfuly authenticated',
          token: token,
        });
      });
  });

  return router;
}

module.exports = apiRouter;