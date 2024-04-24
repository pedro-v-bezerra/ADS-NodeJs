const { MongoClient, ObjectId } = require('mongodb')

const url = 'mongodb+srv://pedrolimabezerrinha:4YPHCjRfUeMdWlAI@cluster0.gpxcwp0.mongodb.net/';

async function conectar() {
    try {
        const mongoClient = await MongoClient.connect(url)
        return mongoClient.db('loja');
    }catch(error){
        console.log("Deu ruim", error);
    }
}

async function inserir(produto){
    const db = await conectar();
    return db.collection('produtos').insertOne(produto);
}

async function listar() {
    const db = await conectar();
    return db.collection('produtos').find({}).toArray();
}

async function atualizar(id, produtoAtualizado) {
    const db = await conectar();
    return db.collection('produtos').updateOne({_id: new ObjectId(id)}, {$set: produtoAtualizado})
}

async function remover(id){
    const db = await conectar();
    return db.collection('produtos').deleteOne({_id: new ObjectId(id)})
}
async function testar() {
    const result = await remover("66284cec46fd06d14ae9dd5e")
    console.log('Produto Removido', result);
}

testar();
