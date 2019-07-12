const { Router } = require('express');

const items = [];

module.exports = Router()
  .post('/', (req, res) => {
    const {
      fruit,
      color,
      amount,
      price
    } = req.body;

    const item = ({
      fruit,
      color,
      amount,
      price
    });

    items.push(item);
    res.send(item);
  })

  .get('/', (req, res) => {
    res.send(items);
  })

  .get('/:id', (req, res) => {
    res.send(items[req.params.id]);
  })

  .put('/:id', (res, req) => {
    const {
      fruit, 
      color,
      amount, 
      price
    } = req.body;

    const updatedItem = {
      fruit,
      color,
      amount,
      price 
    };

    items[req.params.id] = updatedItem;

    res.send(updatedItem);
  });



