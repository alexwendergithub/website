const { MongoClient } = require('mongodb');

const credentials = {
    username: "websiteAdmin",
    password: "websiteAdmin!",
    host: "159.112.183.190",
    port: "27017",
    dbName: "PageMarkerSite"
};

async function connect(dbName ="admin", host="127.0.0.1", port=27017, username="admin", password="admin"){
    /**
     * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
     * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
     */

    const uri = `mongodb://${username}:${password}@${host}:${port}/${dbName}`;

    const client = new MongoClient(uri);
 
    try {
        // Connect to the MongoDB cluste
        console.log("ele vem aq");
        await client.connect();
 
        // Make the appropriate DB calls
        await  listDatabases(client);
 
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

connect(credentials.dbName,credentials.host,credentials.port,credentials.username,credentials.password).catch(console.error);

async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();
 
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

class DbHandler {
    constructor(db_name ="admin", host="127.0.0.1", port=27017, username="admin", password="admin") {
        this.singleton = connect(db_name,host,port,username,password);
    }
    
}
