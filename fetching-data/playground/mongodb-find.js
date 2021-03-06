const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/nodejsapp', (err, db) => {
    if(err)
    {
        return console.log('unable connecting db');
    }
    console.log('connected to mongodb');

    /**
     * count database records without any filtering
     */
    db.collection('Todos').find().count().then((count) => {
        console.log(`count records ${count}`);
    }, (err) => {
        console.log('error ', err);
    });
    //close the connection
    db.close();
});