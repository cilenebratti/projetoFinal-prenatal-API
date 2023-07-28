const mongoose = require("mongoose");

const prenatalSchema = mongoose.Schema(
    {
        _id: { type: mongoose.Schema.Types.ObjectId,
            default: () => new mongoose.Types.ObjectId(),
        },

        numeroProntuario: { 
            type: Number,
            required: true,
        },

        nome: {
            type: String,
            required: true,
            
        },

        dataDeNascimento: {
            type: String,
            required: true,
        },

        cartaoSUS: {
            type: Number,
            required: true,
        },

        ultimaMenstruacao: {
            type: String,
            required: true,
        },

        provavelParto: {
            type: String,
            required: true,
        },

        agendaExames: { 
            type: [String], 
            required: true,
        },

        consultas: {
            type: [String],
            required: true,
        },

        consultaPuerperal: {
            type: String,
            required: true,
        },

        observacao: {
            type: String
        },
    },
    
);


const Model = mongoose.model("prenatal", prenatalSchema);

module.exports = Model 

