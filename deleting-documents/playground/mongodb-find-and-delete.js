const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/nodejsapp', (err, db) => {
    if(err)
    {
        return console.log('unable connecting db');
    }
    console.log('connected to mongodb');

    /**
     * find and delete one document that has record data given below:
     * completed: false
     * if the data has several duplicate, this command will execute first data
     */
    db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
        console.log(result);
    });

    /**
     * close the connection for the last command from this document
     */
    db.close();
});