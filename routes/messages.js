let express = require('express');
let router = express.Router();
const MessageModel = require('../models/messageModel');

router.route('/').get((req, res, next) => {
  MessageModel.find()
    .then((messages) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(messages);
    })
    .catch((err) => next(err));
});

router.route('/:id').get((req, res, next) => {
  MessageModel.findById(req.params.id)
    .then((message) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(message);
    })
    .catch((err) => next(err));
});

router.route('/new').post((req, res, next) => {
  MessageModel.create(req.body)
    .then((message) => {
      console.log('Message Created ', message);
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(message);
    })
    .catch((err) => next(err));
});

router.route('/:id').delete((req, res, next) => {
  MessageModel.findByIdAndDelete(req.params.id)
    .then((message) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(message);
    })
    .catch((err) => next(err));
});

module.exports = router;
