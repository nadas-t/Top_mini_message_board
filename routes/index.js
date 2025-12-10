const express = require("express");
const router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

// Rota básica (index route)
router.get("/", (req, res) => {
  res.render("index", { title: "Mini Message Board", messages: messages }); // vai renderizar views/index.ejs
});

router.get("/new", (req, res) => {
  res.render("form"); // vai renderizar views/new.ejs
});

// Rota POST para "/new"
router.post("/new", (req, res) => {
  console.log("Received POST /new");
  let text = req.body.text;
  let user = req.body.user;

  console.log(`Text: ${text}, User: ${user}`);
  console.log("akkakakka");
  messages.push({ text: text, user: user, added: new Date() });

  res.redirect("/");
  res.send("POST /new received!");
});

router.get("/messages/:id", (req, res) => {
  console.log("to aqui 2");

  const messageId = parseInt(req.params.id, 10);

  if (isNaN(messageId) || messageId < 0 || messageId >= messages.length) {
    return res.status(404).send("Message not found");
  }
  console.log("to aqui");
  const message = messages[messageId];
  res.render("message", { message: message });
});

module.exports = router;
