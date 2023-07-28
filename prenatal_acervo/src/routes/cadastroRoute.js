
const express = require("express");

const router = express.Router();

const controller = require("../controller/cadastroController");



router.get("/", controller.getAllCadastro);

router.post("/add", controller.addCadastro);

router.post("/login", controller.login);


router.delete("/:id", controller.deleteById);



module.exports = router;