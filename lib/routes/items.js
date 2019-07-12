const { Router } = require('express');

const items = [];

module.exports = Router()
  .post('api/v1/items', (req, res) => {
    const {
      fruit,
      color,
      amount,
      price
    } = req.body;

    items.push({ fruit, color, amount, price });
    res.send({
      fruit,
      color,
      amount,
      price
    });
  });
