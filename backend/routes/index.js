const response = (
  res,
  { data = {}, status = 200, contentType = "application/json" }
) => {
  res.writeHead(status, { "Content-Type": contentType });
  let vetor = []
  for (let whatever in data) {
    vetor.push(whatever);
  }
  res.write(JSON.stringify(vetor));
  console.log(res);
  res.end();
};

import { DbHandler } from "../dbHandler.js";
const database = new DbHandler("websiteAdmin", "websiteAdmin!", "159.112.183.190", "27017", "pageMarkerSite");


let collection = "pageMarkerSite";

const routes = {
  "/": {
    GET: (_req, res) => response(res, { data: { message: "running nodejs api" } }),
  },
  "/mangas": {
    GET: async(req, res) => {
      await database.connect();
     mangas = database.read(collection, {});

      response(res, { data: mangas });
    },
    POST: (req, res) => {
      const { title, chapter, link } = req.body;
      const result = database.insert(collection, { title, chapter, link });
      response(res, { data: result.insertedId ? { _id: result.insertedId, title, chapter, link } : {} });
    },
    DELETE: (req, res) => {
      const { title } = req.body; // Usando o título para deletar
      const result = database.delete(collection, { title });
      response(res, { data: { message: result.deletedCount ? "Manga deleted successfully" : "Manga not found" } });
    },
    PUT: (req, res) => {
      const { title, chapter, link } = req.body; // Atualização agora apenas por título
      const updateData = { ...(title && { title }), ...(chapter && { chapter }), ...(link && { link }) };
      const result = database.edit(collection, { title }, updateData); // Usando o título para encontrar e atualizar
      response(res, { data: { message: result.modifiedCount ? "Manga updated successfully" : "Manga not found or no changes made" } });
    },
  },
  notFound: (_req, res) => response(res, { status: 404, data: { message: "requested resource not found!" } }),
};

export default routes;