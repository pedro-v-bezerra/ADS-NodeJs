const supertest = require('supertest')
const app = require('./index')

const request = supertest(app)

describe('Testando a rota /', function () {
    test('Teste da rota GET', async function () {
        const response = await request.get('/')
        expect(response.status).toBe(200)
    })
    test('Teste da rota POST', async function () {
        const response = await request.post('/')
        expect(response.status).toBe(201)
    })
    test('Teste da rota PUT', async function () {
        const response = await request.put('/')
        expect(response.status).toBe(200)
    })
    test('Teste da rota DELETE', async function () {
        const response = await request.delete('/')
        expect(response.status).toBe(204)
    })
})
