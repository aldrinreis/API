const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//BIBLIOTECAS/MODULOS UTILIZADOS
const database = require("./db/db");
const Funcionario = require("./model/funcionarioModel");
const funcionarioController = require("./controller/funcionarioController");
//SINCRONISMO COM O BANCO DE DADOS
try {
  database.sync().then(() => {});
} catch (erro) {
  console.log("Houve uma falha ao sincronizar com o banco de dados. ", erro);
}
app.get("/", (req, res) => {
  return res.json({ message: "Seja bem Vindo a nossa API!" });
});

//CADASTRAR
app.post("/Cadastrar", funcionarioController.FuncionarioCreate);

//GET - LISTAR
app.get("/Funcionarios/:id?", funcionarioController.FuncionarioListar);

//PUT - UPDATE
app.put("/Funcionarios/:id", funcionarioController.FuncionarioUpdate);

//DELETE - Excluir
app.delete("/Funcionarios/:id", funcionarioController.FuncionarioDelete);

app.listen(3000);
