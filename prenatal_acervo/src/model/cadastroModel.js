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

const cadastroModel = mongoose.model("cadastro", cadastroSchema);

module.exports = cadastroModel