const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/nodejsapp', (err, db) => {
    if(err)
    {
        return console.log('unable connecting db');
    }
    console.log('connected to mongodb');

    /**
     * deleting many documents that has record data given below:
     * text: "lets code"
     * so, any dat that have this record will be deleted
     */
    db.collection('Todos').deleteMany({text: 'lets code'}).then((result) => {
        console.log(result);
    });

    /**
     * close the connection for the last command from this document
     */
    db.close();
});