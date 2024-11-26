var tools = require('./dbHandler').DbHandler;
const path = require('path')
const express = require('express')
require("dotenv").config();

const database = new tools(process.env.USERNAME, process.env.PASSWORD, process.env.MONGO_HOST, process.env.PORT, process.env.DB_NAME);
const app = express()
const PORT = 3000
const collection = process.env.DB_NAME;

app.use(express.json())
app.use(express.static(path.join(__dirname,"../frontend/build")))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
});

app.get('/', (req, res) => {

  res.send('Hello World!')
})

app.get('/mangas', async (req, res) => {

  await database.connect();

  mangas = database.read(collection, {});
  mangasJson = await mangas.toArray();

  console.log(mangasJson)
  res.send(mangasJson)

  await database.close();
})

app.post('/mangas', async (req,res) => {
await database.connect();
  console.log(req.body);

  mangaToBeAdded = database.insert(collection,req.body);
  result = await mangaToBeAdded;

  console.log(result);
  res.send(result);

  await database.close();
})

app.put('/mangas', async (req,res) => {
  await database.connect()
  
  const { title , updates } = req.body;
  console.log(title);
  console.log(updates);

  mangaEdited = database.edit(collection,{ title },updates);
  result = await mangaEdited;

  console.log(result);
  res.send(result);

  await database.close()
})

app.delete('/mangas', async (req,res) => {
await database.connect();
  const { title } = req.body;
  console.log(title);
  mangaToBeRemoved = database.delete(collection,{ title });
  result = await mangaToBeRemoved;

  console.log(result);
  res.send(result);

  await database.close();
})

app.listen(PORT, () => { 
  console.log(`Listening on port ${PORT}`);
})