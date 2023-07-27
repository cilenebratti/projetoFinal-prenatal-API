
const express = require("express");

const router = express.Router();

const controller = require("../controller/cadastroController");


router.post("/cadastro/add", controller.addCadastro);

router.get("/cadastro", controller.getAllCadastro);

router.post("/cadastro/login", controller.login);

router.delete("/cadastro/:id", controller.deleteById);



module.exports = router;