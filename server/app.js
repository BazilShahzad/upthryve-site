const express = require('express');
const path = require('path');
const quoteRoutes = require('./routes/quoteRoutes');

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve frontend files
app.use(express.static(path.join(__dirname, '../client')));

// Routes
app.use('/api/quotes', quoteRoutes);

// Redirect /quote → /form
app.get('/quote', (req, res) => {
  res.redirect('/form');
});

// Pages
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/pages/index.html'));
});

app.get('/form', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/pages/form.html'));
});

app.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/pages/admin.html'));
});

module.exports = app;
