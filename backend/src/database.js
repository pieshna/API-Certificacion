import MongoClient from 'mongodb'

export async function connect(){
    try {
        const client = await MongoClient.connect('mongodb://localhost:27017', {useUnifiedTopology:'true'})
    const db = client.db('API-Certificacion');
    console.log('db is conected')
    return db;
    } catch (error) {
        console.log(error)
    }
}

