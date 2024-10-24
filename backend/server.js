var tools = require('./dbHandler').DbHandler;

const database = new tools("websiteAdmin", "websiteAdmin!", "159.112.183.190", "27017", "pageMarkerSite");

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/mangas', async (req, res) => {
  await database.connect();
  let collection = "pageMarkerSite";
  mangas = database.read(collection, {});
  mangasJson = await mangas.toArray()
  console.log(mangasJson)
  res.send(mangasJson)
})

app.listen(port, () => {
  console.log("Dededede")
})