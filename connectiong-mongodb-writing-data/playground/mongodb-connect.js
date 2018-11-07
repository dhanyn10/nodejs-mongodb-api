const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/nodejsapp', (err, client) => {
    if(err)
    {
        return console.log('unable connecting db');
    }
    console.log('connected to mongodb');
    const db = client.db('nodejsapp');

    db.collection('Todos').insertOne({
        text: 'my next code',
        completed: true
    }, (err, result) => {
        if(err)
        {
            return console.log('unable to insert collection', err);
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
    });
    client.close();
});