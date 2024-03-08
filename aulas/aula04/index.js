const express = require('express')

const app = express()

app.use(express.json())

app.use((req, res, next) => {
    console.log(`Data ${new Date()}`)
    next()
})

app.get('/', (req, res) => {
    console.log(`URL= ${req.url}`)
    console.log(`Metodo= ${req.method}`)
    console.log(`Cabeçalho= ${req.headers}`)
    console.log(`Parametro= ${req.params}`)
    console.log(`Corpo= ${req.body}`)
    res.send('Acessou a rota Get')
})

app.post('/', (req, res) => {
    const body = req.body
    console.log(body)
    res.json({ status: 200, message: "Sucesso" })
})

app.put('/', (req, res) => {
    res.status(204).end()
})

app.delete('/', (req, res) => {
    throw new Exception()
    res.end()
})

app.use((error, req, res, next) => {
    res.status(400).json({ message: "Rota não encontrada" })
})

app.listen(3000, () => {
    console.log("API está ON!")
})
