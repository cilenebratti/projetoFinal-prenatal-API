const prenatalModel = require("../model/prenatalModel");


const newPrenatal = async (req, res) => {
    try {
        const {
            prontuario,
            nome,
            dataDeNascimento,
            cartãoSUS,
            ultimaMenstruação,
            provavelParto,
            examesLoborTrim1,
            examesLoborTrim2,
            examesLoborTrim3,
            consulta1,
            consulta2,
            consulta3,
            consulta4,
            consulta5,
            consulta6,
            consulta7,
            consulta8,
            consulta9,
            consulta10,
            consultaPueriperal,
            observacao
        } = req.body;

        const novoPrenatal = new prenatalModel({
            prontuario,
            nome,
            dataDeNascimento,
            cartãoSUS,
            ultimaMenstruação,
            provavelParto,
            examesLoborTrim1,
            examesLoborTrim2,
            examesLoborTrim3,
            consulta1,
            consulta2,
            consulta3,
            consulta4,
            consulta5,
            consulta6,
            consulta7,
            consulta8,
            consulta9,
            consulta10,
            consultaPueriperal,
            observacao
        });

        const savedPrenatal = await novoPrenatal.save();
        res.status(200).json({ message: "Novo pré-natal adicionado com sucesso!!", savedPrenatal});
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    };
};


const findAllPrenatal = async (req,res) => {
    try {
        const allAcervo = await prenatalModel.find({}, null);
        res.status(200).json(allAcervo);
    } catch (error) {
        res.status(500).json({ message: error.message});
    };
};


const findByprontuario = async (req, res) => { // posso substituir o prontuario por prontuário sem perdas no findByprontuario??
    try {
        const findPrenatal = await prenatalModel.findByprontuario(req.params.prontuario);
        res.status(200).json(findPrenatal);
    } catch (error) {
        res.status(500).json({ message: error.message });
    };
};


/**const getByDate = async (req, res) => {
    try { 
        const {data} = req.query
        const findDate = await prenatalModel.find({})
        }
    } catch (error) {
        
    }*/



const updatePrenatalByprontuario = async (req, res) => {
    try {
        const {
            prontuario,
            nome,
            dataDeNascimento,
            cartãoSUS,
            ultimaMenstruação,
            provavelParto,
            examesLoborTrim1,
            examesLoborTrim2,
            examesLoborTrim3,
            consulta1,
            consulta2,
            consulta3,
            consulta4,
            consulta5,
            consulta6,
            consulta7,
            consulta8,
            consulta9,
            consulta10,
            consultaPueriperal,
            observacao
        } = req.body;
        const updatePrenatal = await prenatalModel.findByprontuarioAndUpdate(req.params.prontuario, 
            {
            prontuario,
            nome,
            dataDeNascimento,
            cartãoSUS,
            ultimaMenstruação,
            provavelParto,
            examesLoborTrim1,
            examesLoborTrim2,
            examesLoborTrim3,
            consulta1,
            consulta2,
            consulta3,
            consulta4,
            consulta5,
            consulta6,
            consulta7,
            consulta8,
            consulta9,
            consulta10,
            consultaPueriperal,
            observacao,
            }
        );
        res.status(200).json(updatePrenatal);
    } catch (error) {
        res.status(500).json({ message: error.message });
    };
}


const deletePrenatal = async (req, res) => {
    try {
        const { prontuario } = req.params;
        const findPreNatal = await prenatalModel.findByprontuarioAndDelete(prontuario);
        if (findPreNatal == null) {
            return res.status(404).json({ message: `Cadastro de prenatal com o número de prontuário ${prontuario} não foi encontrado, confirme número de prontuário de paciente!`})
        };
        res.status(200).json({ message: `cadastro de prenatal com número de prontuário ${prontuario} foi APAGADO com sucesso!!`});
    } catch (error) {
        res.status(500).json({ message: error.message });
    };
};


module.exports = {
    findAllPrenatal,
    newPrenatal,
    findByprontuario,
    //getByDate,
    updatePrenatalByprontuario,
    deletePrenatal
}