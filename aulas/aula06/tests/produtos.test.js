const supertest = require('supertest')

const app = require("../app")

const request = supertest(app);

describe("Teste da API Produtos", function(){
    test("POST / deve retornar 201 um objeto JSON", async function() {

    });
    test("POST / deve retornar 422 um objeto JSON", async function() {

    });
    test("GET / deve retornar 200 um array JSON", async function() {

    });
    test("GET /id deve retornar 200 um objeto JSON", async function() {

    });
    test("GET /id deve retornar 404 um objeto JSON", async function() {

    });
    test("PUT /id deve retornar 200 um objeto JSON", async function() {

    });
    test("PUT /id deve retornar 422 um objeto JSON", async function() {

    });
    test("PUT /id deve retornar 404 um objeto JSON", async function() {

    });
    test("DELETE /id deve retornar 204 um objeto JSON", async function() {

    });
    test("DELETE /id deve retornar 204 sem corpo", async function() {

    });
    test("DELETE /id deve retornar 404 um objeto JSON", async function() {

    });

})