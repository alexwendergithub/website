var tools = require("./dbHandler");

const collection = "pageMarkerSite"
async function main(){
    database = new tools.DbHandler(username = "websiteAdmin", password = "websiteAdmin!", host = "159.112.183.190",port="27017", dbName = "pageMarkerSite")
    await database.connect()
    // database.insert("pageMarkerSite",{"title":"dummy"})
    //database.delete(collection,{"title":"dummyedited"})
    //a = database.read("pageMarkerSite",{})
    //a = database.db.collection(collection).find({});
    a = database.read(collection,{})
    await a.forEach(console.log)
    console.log(a)
}
main()