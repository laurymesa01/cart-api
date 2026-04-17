const jsonServer = require("json-server");
const express = require("express");


const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();


// Permite usar el puerto asignado por la plataforma de despliegue
const PORT = process.env.PORT || 3000;

// Middleware por defecto (logger, archivos estáticos, CORS, etc.)
server.use(middlewares);

// Permite recibir datos en formato JSON
server.use(jsonServer.bodyParser);
server.use("/images", express.static("public/images"));


server.get("/favicon.ico", (req, res) => {
  res.status(204).end(); // Sin contenido
});

// Ruta de prueba para verificar que la API funciona
server.get("/", (req, res) => {
  res.json({
    message: "🚀 JSON Server está funcionando correctamente",
  });
});

// Ejemplo de endpoint personalizado
server.post("/desserts", (req, res) => {
  const dessert = {
    id: Date.now(),
    ...req.body,
    createdAt: new Date(),
  };

  router.db.get("desserts").push(order).write();

  res.status(201).json(dessert);
});

// Usa las rutas definidas en db.json
server.use(router);

// Inicia el servidor
server.listen(PORT, () => {
  console.log(`JSON Server corriendo en el puerto ${PORT}`);
});