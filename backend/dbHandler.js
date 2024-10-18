const { MongoClient } = require('mongodb');


class DbHandler {
    static instance = null;
    
    constructor(username = "admin", password = "admin", host = "127.0.0.1", port = 27017, dbName = "admin") {
        if (DbHandler.instance) {
            return DbHandler.instance;
        }
        this.URLmongo = "mongodb://" + username + ":" + password + "@" + host + ":" + port  + "/admin"
        console.log(this.URLmongo)
        this.db = null
        this.dbName = dbName
    }

    async connect(){
        this.client = new MongoClient(this.URLmongo);
        DbHandler.instance = this;
        await this.client.connect()
            .then(() => {
                this.db = this.client.db(this.dbName);
                console.log("Connected to the database.");
            })
            .catch(err => {
                console.error("Database connection failed:", err);
            });
    }

    async insert(collection, value) {
        try {
            const result = await this.db.collection(collection).insertOne(value);
            return result;
        } catch (err) {
            console.error("Insert failed:", err);
            throw err;
        }
    }

    read(collection, query) {
        try {
            const result = this.db.collection(collection).find(query);
            return result;
        } catch (err) {
            console.error("Read failed:", err);
            throw err;
        }
    }

    async delete(collection, query) {
        try {
            const result = await this.db.collection(collection).deleteOne(query);
            return result;
        } catch (err) {
            console.error("Delete failed:", err);
            throw err;
        }
    }

    async edit(collection, query, update) {
        try {
            const result = await this.db.collection(collection).updateOne(query, { $set: update });
            return result;
        } catch (err) {
            console.error("Update failed:", err);
            throw err;
        }
    }

    async close() {
        await this.client.close();
    }
}

module.exports = {
    DbHandler
}