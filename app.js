const express = require("express");
const app = express();
const path = require("path");
const { title } = require("process");

// Configurar EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const indexRouter = require("./routes/index");

app.use(express.urlencoded({ extended: true })); // necessário para req.body
app.use("/", indexRouter);

// Iniciar servidor
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
