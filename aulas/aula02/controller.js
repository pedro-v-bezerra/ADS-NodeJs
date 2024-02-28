const readyline = require('readline-sync')
const Produto = require('./model')
const produtos = []

function listar() {
    produtos.forEach(p => {
        console.log(p.toString())
    });
}

function criar() {
    const nome = readyline.question("Entre com o nome do produto: ")
    const preco = readyline.question("Entre com o preco do produto: ")
    const novo = new Produto(nome, preco)
    produtos.push(novo)
}

function buscar() {
    const nome = readyline.question("Entre com o nome do produto: ")
    const p = produtos.find((str) => str.nome === nome)
    console.log(p ? p.toString() : `Nenhum produto encontrado`)
}

function atualizar() {
    const nome = readyline.question("Entre com o nome do produto: ")
    const p = produtos.find((str) => str.nome === nome)
    if (p) {
        const preco = readyline.question("Entre com o novo preco: ")
        p.preco = preco
        console.log(`Preço do produto ${p.nome} alterado para ${preco}`)
    } else {
        console.log("Produto não localizado")
    }
}

function remover() {
    const nome = readyline.question("Entre com o nome do produto: ")
    const posicao = produtos.findIndex((str) => str.nome === nome)
    if (posicao >= 0) {
        produtos.splice(posicao, 1)
        console.log(`Produto removido`)
    } else {
        console.log("Produto não localizado")
    }
}

module.exports = { criar, listar, buscar, atualizar, remover }