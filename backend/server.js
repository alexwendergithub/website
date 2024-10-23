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

//async function main(){
//    database = new tools.DbHandler(username = "websiteAdmin", password = "websiteAdmin!", host = "159.112.183.190",port="27017", dbName = "pageMarkerSite")
//    await database.connect()
//    // database.insert("pageMarkerSite",{"title":"dummy"})
//    database.delete(collection,{"title":"dummyedited"})
//    a = database.read("pageMarkerSite",{})
//    //a = database.db.collection(collection).find({});
//    await a.forEach(console.log)
//}
const loggerMiddleware = (req, res) => {
    console.log(`${req.method} ${req.url}`);
}

const http = require("http");
const url = require("url");

//const routes = import("./routes/index.js");

const PORT = process.env.PORT || 4000;

const server = http.createServer( async(req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const query = parsedUrl.query;
    const path = parsedUrl.pathname;
    const method = req.method.toUpperCase();

    const routesModule = await import("./routes/index.js");
    const routes = routesModule.default || routesModule;
  
    let handler = routes[path] && routes[path][method];
  
    if (!handler) {
      const routeKeys = Object.keys(routes).filter((key) => key.includes(":"));
  
      const matchedKey = routeKeys.find((key) => {
        // replacing each segment of the key that starts with a colon (:)
        const regex = new RegExp(`^${key.replace(/:[^/]+/g, "([^/]+)")}$`);
        return regex.test(path);
      });
  
      if (matchedKey) {
        const regex = new RegExp(`^${matchedKey.replace(/:[^/]+/g, "([^/]+)")}$`);
        const dynamicParams = regex.exec(path).slice(1);
        const dynamicHandler = routes[matchedKey][method];
  
        const paramKeys = matchedKey
          .match(/:[^/]+/g)
          .map((key) => key.substring(1));
  
        const params = dynamicParams.reduce(
          (acc, val, i) => ({ ...acc, [paramKeys[i]]: val }),
          {}
        );
  
        // set params in req
        req.params = params;
  
        handler = dynamicHandler;
      }
    }
  
    // url and method not match
    if (!handler) {
      handler = routes.notFound;
    }
  
    // set query string in req
    req.query = {};
  
    for (const key in query) {
      req.query[key] = query[key];
    }
  
    handler(req, res);
  });
  
  // global middleware
  server.on("request", loggerMiddleware);
  
  server.listen(PORT, () => console.log(`server listening on port: ${PORT}`));