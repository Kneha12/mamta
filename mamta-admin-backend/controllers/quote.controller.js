const Quote = require("../models/Quote");

// GET: Fetch all quotes with pagination, search & date filter
exports.getAllQuotes = async (req, res) => {
  try {
    const { page = 1, limit = 10, phone = "", date } = req.query;

    const query = {};

    if (phone) query.phone = { $regex: phone, $options: "i" };
    if (date) query.date = { $gte: new Date(date) };

    const total = await Quote.countDocuments(query);
    const quotes = await Quote.find(query)
      .skip((page - 1) * limit)
      .limit(parseInt(limit))
      .sort({ date: -1 });

    res.json({ quotes, total });
  } catch (err) {
    console.error("❌ Error fetching quotes:", err);
    res.status(500).json({ error: "Server Error" });
  }
};

// POST: Create a new quote
exports.createQuote = async (req, res) => {
  try {
    console.log("📩 Received in req.body:", req.body);

    const {
      name,
      phone,
      pickupLocation,
      dropLocation,
      shiftingType,
      date,
    } = req.body;

    const data = await Quote.create({
      name,
      phone,
      pickupLocation,
      dropLocation,
      shiftingType,
      date,
    });

    res.status(201).json({ message: "Quote created", data });
  } catch (err) {
    console.error("❌ Error creating quote:", err);
    res.status(400).json({ error: "Failed to create quote" });
  }
};
