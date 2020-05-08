const express = require('express');
const router = express.Router();
const db = require('./db/models');

router.get('/', async (req, res, next) => {
    try {
      const books = await db.Book.findAll({ order: [['title', 'ASC']] });
      res.render('book-list', { title: 'Books', books });
    } catch (err) {
      next(err);
    }
  });

module.exports = router;
