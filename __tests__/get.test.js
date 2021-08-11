const app = require('../app.js');
const supertest = require('supertest');
const request = supertest(app);
const data = require('../data.js');

it('gets the discs endpoint', async () => {
    const response = await request.get('/discs')

    expect(response.status).toBe(200);
    expect(response.body).toEqual(data);
});

it('gets a specific disc', async () => {
    const response = await request.get('/discs/1')

    expect(response.status).toBe(200)
    expect(response.body).toEqual(data[0])
});

it('gets the brand name', async () => {
    const response = await request.get('/discs/brand/innova')
    expect(response.status).toBe(200)
    expect(response.body).toEqual(data.filter(item => item.brand === 'innova'))
})
