const Bill = require('../models/Bill');
const generatePdf = require('../utils/pdfGenerator');
const fs = require('fs');

exports.generateBill = async (req, res) => {
  try {
    const bill = new Bill(req.body);
    await bill.save();

    const pdfPath = await generatePdf(bill); // returns path
    bill.pdfPath = pdfPath;
    await bill.save();

    res.json({ message: "Bill generated", bill });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getBillHistory = async (req, res) => {
  try {
    const bills = await Bill.find().sort({ createdAt: -1 });
    res.json(bills);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
