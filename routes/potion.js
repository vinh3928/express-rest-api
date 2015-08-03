
var express = require('express');
var router = express.Router();
var db = require('monk')(process.env.MONGOLAB_URI);
var Potion = db.get('potion');

router.get('/', function(req, res) {
  Potion.find({}, function(err, docs) {
    if (err) {
      res.send(err);
    }
    res.status(200).json(docs);
  });
});

router.post('/', function(req, res) {
  Potion.insert(req.body, function(err, doc) {
    if (err) {
      res.send(err);
    }
    res.status(201).json(doc);
  });
});

router.get('/:id', function(req, res) {
  Potion.findOne({_id: req.params.id}, function(err, doc) {
    if (err) {
      res.send(err);
    }
    res.status(200).json(doc);
  });
});

router.put('/:id', function(req, res) {
  Potion.findAndModify({_id: req.params.id}, req.body, function(err, docs) {
    if (err) {
      res.send(err);
    }
    res.status(200).json(docs);
  });
});

router.post('/:id', function(req, res) {
  Potion.remove({_id: req.params.id}, function(err, docs) {
    if (err) {
      res.send(err);
    }
    res.status(204).json(docs);
  });

});

module.exports = router;
