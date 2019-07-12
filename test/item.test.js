const request = require('supertest');
const app = require('../lib/app');

describe('items routes', () => {
  it('can create item with POST', () => {
    return request(app)
      .post('api/v1/items')
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
});
