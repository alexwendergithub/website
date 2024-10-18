var tools = require('./dbHandler');

dbName = "pageMarkerSite"
collection = "pageMarkerSite"
query = {}
// async function main(){
//     this.db = null
//     URLmongo = "mongodb://websiteAdmin:websiteAdmin!@159.112.183.190:27017/admin"
//     const { MongoClient } = require('mongodb');
//     client = new MongoClient(URLmongo);     
//     await client.connect().then(() => {
//         this.db = this.client.db(dbName);
//         console.log("Connected to the database.");
//     })
//     .catch(err => {
//         console.error("Database connection failed:", err);
//     });
//     a = this.db.collection(collection).find(query);
//     await a.forEach(console.log)
// }

async function main(){
    database = new tools.DbHandler(username = "websiteAdmin", password = "websiteAdmin!", host = "159.112.183.190",port="27017", dbName = "pageMarkerSite")
    await database.connect()
    a = database.read("pageMarkerSite",{})
    //a = database.db.collection(collection).find({});
    await a.forEach(console.log)
}

main()