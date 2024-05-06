const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const orderController = require('./orderController');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../Frontend')));

// Routes
app.post('/submit-order', orderController.submitOrder);

app.get('/Frontend/html/order-confirmation.html', (req, res) => {
  res.sendFile(path.join(__dirname, '../Frontend/html/order-confirmation.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}); 