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
    const response = await request.get('/dirtbikes/1')

    expect(response.status).toBe(200)
    expect(response.body).toEqual(data[0])
})