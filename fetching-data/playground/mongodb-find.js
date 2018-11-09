const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/nodejsapp', (err, db) => {
    if(err)
    {
        return console.log('unable connecting db');
    }
    console.log('connected to mongodb');

    /**
     * display all value from database without any filtering
     * keywords.
     */
    // db.collection('Todos').find().toArray().then((docs) => {
    //     console.log('display all records');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('error ', err);
    // });
    // db.close();
    /**
     * display all value from database with filtering
     * keywords: completed:false
     */
    // db.collection('Todos').find({completed: false}).toArray().then((docs) => {
    //     console.log('displaying custom records');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('error ', err);
    // });
    // db.close();
    
    /**
     * display value from database with filtering id
     */
    // db.collection('Todos').find({
    //     _id: new ObjectID('5be54df1d7190afbdd6492e8')
    // }).toArray().then((docs) => {
    //     console.log('displaying custom records');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('error ', err);
    // });
    /**
     * count database records
     */
    db.collection('Todos').find().count().then((count) => {
        console.log(`count records ${count}`);
    }, (err) => {
        console.log('error ', err);
    });
    db.close();
});