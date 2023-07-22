const mongoose = require("mongoose");


const prenatalSchema = mongoose.Schema(
    {
        prontuario: { 
            type: Number,
            required: true,
            unique: true,
        },

        nome: {
            type: String,
            required: true,
            unique: true,
        },

        dataDeNascimento: {
            type: String,
            required: true,
        },

        cartaoSUS: {
            type: Number,
            required: true,
            unique: true,
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
            type: [String], // 3 entradas de datas como string ("1º: 22/07/2023", "2º: 25/07/2023"... ou "22/07/2023", "25/07/2023", "29/07/2023"??)
            required: true,
        },

        /**presencaexameLabor1: {
            type: Boolean,
            requerido: true,
        },*/

        /**exameLabor2: {
            type: String,
            required: true,
        },

        exameLabor3: {
            type: String,
            required: true,
        },*/

        consulta1: {
            type: String,
            required: true,
        },

        consulta2: {
            type: String,
            required: true,
        },

        consulta3: {
            type: String,
            required: true,
        },

        consulta4: {
            type: String,
            required: true,
        },

        consulta5: {
            type: String,
            required: true,
        },

        consulta6: {
            type: String,
            required: true,
        },

        consulta7: {
            type: String,
            required: true,
        },

        consulta8: {
            type: String,
            required: true,
        },

        consulta9: {
            type: String,
            required: true,
        },

        consulta10: {
            type: String,
            required: true,
        },

        consultaPuerperal: {
            type: String,
            required: true,
        },

        observacao: {
            type: String
        },
    }
);


const Model = mongoose.model("prenatal", prenatalSchema);

module.exports = Model 

