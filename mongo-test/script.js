let mongo = require('mongodb');

let mongoClient = mongo.MongoClient;

let url = "mongodb://Erom:242990exfvcf@ds113586.mlab.com:13586/erom-test";

mongoClient.connect(url,{ useNewUrlParser: true }, async function(err, db) {
    if (err) throw err;
    let currentdb = db.db("erom-test");
    console.log("Connection created!");

    let user1 = { name: 'user1', lastName: 'name1', age: 30};
    currentdb.collection("users").insertOne(user1, function(err, res) {
        if (err) throw err;
        console.log("1 document inserted");
    });

    db.close();

});
