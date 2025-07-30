const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const { generateBill, getBillHistory } = require('../controllers/bill.controller');

router.post('/generate', auth, generateBill);
router.get('/history', auth, getBillHistory);

module.exports = router;
