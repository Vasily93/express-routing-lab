const request = require('supertest');
const app = require('../lib/app');

describe('items routes', () => {
  it('can create item with POST', () => {
    return request(app)
      .post('/api/v1/items')
      .send({ fruit:'banana', color:'yellow', amount:3, price:'$30' })
      .then(res => {
        expect(res.body).toEqual({
          fruit:'banana',
          color:'yellow',
          amount:3,
          price:'$30'
        });
      });
  });
  it ('can get an array of items if GET', () => {
    return request(app)
      .get('/api/v1/items')
      .then(res => {
        expect(res.body).toEqual([{
          fruit:'banana',
          color:'yellow',
          amount:3,
          price:'$30'
        }]);
      });
  });

  it('it can get item by index', () => {
    return request(app)
      .get('/api/v1/items/0')
      .then(res => {
        expect(res.body).toEqual({
          fruit:'banana',
          color:'yellow',
          amount:3,
          price:'$30'
        });
      });
  });

  it('updetes item with PUT', () => {
    const newItem = {
      fruit:'shmanana',
      color:'shmyellow',
      amount:300,
      price:'$3000'
    };

    return request(app)
      .put('/api/v1/items/0')
      .send(newItem)
      .then(res => {
        expect (res.body).toEqual({
          fruit:'shmanana',
          color:'shmyellow',
          amount:300,
          price:'$3000'
        });
      });
  });
});

