// TEMP storage (will be replaced by MongoDB)
const quotes = [];

exports.createQuote = (req, res) => {
  const {
    fullName,
    email,
    countryCode,
    phoneNumber,
    website,
    services,
    notes
  } = req.body;

  if (!fullName || !email || !phoneNumber) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  const newQuote = {
    id: Date.now(),
    fullName,
    email,
    phone: `${countryCode}${phoneNumber}`,
    website,
    services,
    notes,
    createdAt: new Date()
  };

  quotes.push(newQuote);

  res.status(201).json({
    message: 'Quote submitted successfully',
    data: newQuote
  });
};

exports.getAllQuotes = (req, res) => {
  res.status(200).json(quotes);
};
