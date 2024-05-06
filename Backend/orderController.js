// Function to validate the order data
function validateOrder(order) {
    for (const item of order) {
      if (item.quantity <= 0) {
        return false;
      }
    }
    return true;
  }
  
  // Function to calculate the total amount of the order
  function calculateTotalAmount(order) {
    let totalAmount = 0;
    for (const item of order) {
      totalAmount += item.quantity * item.price;
    }
    return totalAmount;
  }
  
  // Function to handle the order submission
  function submitOrder(req, res) {
    const { order } = req.body;
  
    // Perform form validation
    const isValid = validateOrder(order);
  
    if (!isValid) {
      return res.status(400).json({ error: 'Invalid order data. Quantity should be positive.' });
    }
  
    // Calculate the total amount
    const totalAmount = calculateTotalAmount(order);
  
    // Send the total amount as a response
    res.json({ totalAmount });
  }
  
  module.exports = {
    submitOrder,
  };