const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/nodejsapp', (err, db) => {
    if(err)
    {
        return console.log('unable connecting db');
    }
    console.log('connected to mongodb');

    /**
     * display all value from database with filtering
     * keywords: completed:false
     */
    db.collection('Todos').find({completed: false}).toArray().then((docs) => {
        console.log('displaying custom records');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('error ', err);
    });
    //close the connection
    db.close();
});