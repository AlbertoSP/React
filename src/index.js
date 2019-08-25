const express = require("express");
const morgan = require("morgan");
const path = require("path");
const { mongoose } = require("./database");
const app = express();

//configuracion
app.set("port", process.env.port || 4000);

//middlewares
app.use(morgan("dev"));
app.use(express.json());

//rutas
app.use("/api/tasks", require("./routes/tareas.routes"));

//static files
app.use(express.static(path.join(__dirname, "public")));

//empezando servidor
app.listen(app.get("port"), () => {
  console.log(`Server on port ${app.get("port")}`);
});
