const app = require('../app');
const request = require('supertest');
const chai = require('chai');
const expect = chai.expect;

describe('Task API', () => {
    it('should get all tasks', async () => {
        const res = await request(app).get('/tasks');
        expect(res.status).to.equal(200);
        expect(res.body).to.be.an('array');
    });

});
