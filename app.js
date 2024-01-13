const express = require("express");
const app = express();

const cors = require("cors")
app.use(cors());
app.use(express.json());

app.get("/", function (req, res) {
  res.send("Hello World");
});

// TODO:: CRIAR REGRA DE ROTAS
app.get("/produtos", (req, res) => {
  res.send([
    {
      nome: "pc",
      preco: 1000.8,
    },
    {
      nome: "telefone",
      preco: 3000.8,
    },
  ]);
});
app.get("/produtos/:id", (req, res) => {
  // Via URL
  const id = req.params.id;

  console.log("ID: ", id);

  res.send({
    id: id,
    nome: "telefone",
    preco: 3000.8,
  });
});
// create
app.post("/produtos/", (req, res) => {
  // Via URL
  const produto = req.body;
  console.log("novo produto: ", produto);
  res.send().status(201);
});
// update
app.put("/produtos/:id", (req, res) => {
  // Via URL
  const id = req.params.id;
  const produto = req.body;

  if (produto.nome === "") {
    res.status(404);
    res.send({ message: "Nome é obrigatorio!" });
  }

  console.log("Atualizar produto: ", id, produto);
  res.send().status(200);
});
// delete
app.delete("/produtos/:id", (req, res) => {
  // Via URL
  const id = req.params.id;
  console.log("Deletar ID: ", id);
  res.status(204).send();
});

app.listen(3000);
