const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/nodejsapp', (err, db) => {
    if(err)
    {
        return console.log('unable connecting db');
    }
    console.log('connected to mongodb');

    /**
     * deleting one document that has record data given below:
     * text: "lets code"
     * if the data has several duplicate, this command will execute first data
     */
    db.collection('Todos').deleteOne({text: 'lets code'}).then((result) => {
        console.log(result);
    });

    /**
     * close the connection for the last command from this document
     */
    db.close();
});