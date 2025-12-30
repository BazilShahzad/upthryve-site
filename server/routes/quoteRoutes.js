const express = require('express');
const {
  createQuote,
  getAllQuotes
} = require('../controllers/quoteController');

const auth = require('../middleware/auth');

const router = express.Router();

// Public – form submission
router.post('/', createQuote);

// Protected – admin only
router.get('/', auth, getAllQuotes);

module.exports = router;

