const PDFDocument = require('pdfkit');
const fs = require('fs');

module.exports = function (bill) {
  return new Promise((resolve, reject) => {
    const pdfPath = `uploads/bills/bill_${bill._id}.pdf`;
    const doc = new PDFDocument();
    doc.pipe(fs.createWriteStream(pdfPath));

    doc.fontSize(20).text('Mamta Packers & Movers - Bill', { align: 'center' });
    doc.moveDown();
    doc.fontSize(12).text(`Pickup: ${bill.pickup}`);
    doc.text(`Drop: ${bill.drop}`);
    doc.text(`Goods: ${bill.goodsType}`);
    doc.text(`Weight: ${bill.weight}kg`);
    doc.text(`Rate: ₹${bill.rate}/kg`);
    doc.text(`Total: ₹${bill.weight * bill.rate}`);

    doc.end();
    doc.on('finish', () => resolve(pdfPath));
    doc.on('error', reject);
  });
};
