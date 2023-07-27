const cadastroModel = require("../model/cadastroModel");

const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");

const SECRET = process.env.SECRET;


const addCadastro =  (req, res) => {
    try{
        const {nome, email, senha} = req.body
        const senhaComHash = bcrypt.hashSync(senha, 10)
        const cadastro = new cadastroModel({nome, email, senha: senhaComHash})
        cadastro.save()
        res.status(201).json({ message: "cadastro realizado com sucesso", cadastro})
     } catch (err) {
        res.status(500).json({ message: err.message })
    }
};


const getAllCadastro = async (req, res) => {
    try {
        const getAll = await cadastroModel.find();
        res.status(200).json(getAll)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
};


const deleteById = async (req, res) => {
    try {
        const {id} = req.params;
         const apagarCadastro = await cadastroModel.findByIdAndDelete(id);
         if (apagarCadastro == null) {
            return res.status(404).json({ message: `Cadastro com id: ${id} não foi encontrato!`})
         }
         res.status(200).json({ message: `Cadastro com id: ${id} foi apagado com sucesso!`, apagarCadastro})
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message })
 }
};


const login = async (req, res) => {
    try {
        const loginCadastro = await cadastroModel.findOne({email: req.body.email});
        if (!loginCadastro) {
            return res.status(404).json({ message: `Não existe cadastro de autorização com esse e-mail: ${req.body.email} !`});
        }
        const senhaValida = bcrypt.compareSync(req.body.senha, loginCadastro.senha) 
        if (!senhaValida) {
            return res.status(403).send("Senha incorreta!!")
        } 
        const token = jwt.sign({email: req.body.email}, SECRET)
        return res.status(200).send(token)
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message})
    }
};


module.exports = {
    addCadastro,
    getAllCadastro,
    deleteById,
    login
}