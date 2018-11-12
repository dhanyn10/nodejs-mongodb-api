const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/nodejsapp', (err, db) => {
    if(err)
    {
        return console.log('unable connecting db');
    }
    console.log('connected to mongodb');
    
    /**
     * display value from database with filtering id
     */
    db.collection('Todos').find({
        _id: new ObjectID('5be54df1d7190afbdd6492e8')
    }).toArray().then((docs) => {
        console.log('displaying custom records');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('error ', err);
    });
    //close the connection
    db.close();
});