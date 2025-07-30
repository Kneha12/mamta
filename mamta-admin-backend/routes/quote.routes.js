const express = require('express');
const router = express.Router();

const { getAllQuotes, createQuote } = require('../controllers/quote.controller');

router.get('/quotes', getAllQuotes);      // GET all quotes
router.post('/quotes', createQuote);      // POST a new quote

module.exports = router;
