const supertest = require("supertest");

const app = require('../app')

const request = supertest(app);

let id = null;

describe('API Loja Virtual', () => {
    test("Deve Retornar 201  e JSON no POST /produto", async () => {
        const response = await request.post('/produtos').send({nome: "banana", preco: 12.0})
        expect(response.status).toBe(201)
        expect(response.type).toBe('application/json')
        id = response.body._id
    })
})