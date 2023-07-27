const mongoose = require("mongoose");

const cadastroSchema = new mongoose.Schema(
    {
    nome: {
        type: String
    },
    email: {
        type: String
    },
    senha: {
        type: String
    }
    },
    {
    versionKey: false 
    }
)

const Cadastro = mongoose.model("cadastro", cadastroSchema);

module.exports = Cadastro