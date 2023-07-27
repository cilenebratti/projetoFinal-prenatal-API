const prenatalModel = require("../model/prenatalModel");
const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET;

const newPrenatal = async (req, res) => {
    try {
        const {
            numeroProntuario,
            nome,
            dataDeNascimento,
            cartaoSUS,
            ultimaMenstruacao,
            provavelParto,
            agendaExames,
            consultas,
            consultaPuerperal,
            observacao
        } = req.body;

        const novoPrenatal = new prenatalModel({
            numeroProntuario,
            nome,
            dataDeNascimento,
            cartaoSUS,
            ultimaMenstruacao,
            provavelParto,
            agendaExames,
            consultas,
            consultaPuerperal,
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
        const authHeader = req.get("authorization") // pega o cabeçalho de autorização

    if (!authHeader) {
      return res.status(401).send("Você esqueceu de passar as informações de autorização!!")
    }

    const token = authHeader.split(" ")[1] 

    jwt.verify(token, SECRET, async function (erro) {
      if (erro) {
        return res.status(403).send("Acesso não autorizado!!!")
      } 
      
      const allAcervo = await prenatalModel.find({}, null);
        res.status(200).json(allAcervo);
    })  
    } catch (error) {
        res.status(500).json({ message: error.message});
    };
};


const findBynumeroProntuario = async (req, res) => { 
    try {
        const findPrenatal = await prenatalModel.find({numeroProntuario: req.params.numeroProntuario});
        res.status(200).json(findPrenatal);
    } catch (error) {
        res.status(500).json({ message: error.message });
    };
};


const getExamsByDate = async (req, res) => {
    try { 
        const {data} = req.query
        const findDate = await prenatalModel.find({agendaExames: data})
        res.status(200).json(findDate)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const getAppointmentByDate = async (req, res) => {
    try { 
        const {data} = req.query
        const findDate = await prenatalModel.find({consultas: data})
        res.status(200).json(findDate)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


const updatePrenatalBynumeroProntuario = async (req, res) => {
    try {
        const {
            numeroProntuario,
            nome,
            dataDeNascimento,
            cartaoSUS,
            ultimaMenstruacao,
            provavelParto,
            agendaExames,
            consultas,
            consultaPuerperal,
            observacao
        } = req.body;
        const findPreNatal = await prenatalModel.findOne({numeroProntuario: numeroProntuario})
        console.log(findPreNatal)
        findPreNatal.nome = nome||findPreNatal.nome 
        findPreNatal.dataDeNascimento = dataDeNascimento||findPreNatal.dataDeNascimento
        findPreNatal.cartaoSUS = cartaoSUS||findPreNatal.cartaoSUS
        findPreNatal.ultimaMenstruacao = ultimaMenstruacao||findPreNatal.ultimaMenstruacao
        findPreNatal.provavelParto = provavelParto||findPreNatal.provavelParto
        findPreNatal.agendaExames = agendaExames||findPreNatal.agendaExames
        findPreNatal.consultas = consultas||findPreNatal.consultas
        findPreNatal.consultaPuerperal = consultaPuerperal||findPreNatal.consultaPuerperal
        findPreNatal.observacao = observacao||findPreNatal.observacao
    
        await findPreNatal.save()
        res.status(200).json(findPreNatal);
    } catch (error) {
        res.status(500).json({ message: error.message });
    };
};


const deletePrenatal = async (req, res) => {
    try {

        const { numeroProntuario } = req.body;
        const findPreNatal = await prenatalModel.find({numeroProntuario});
        if (findPreNatal == null) {
            return res.status(404).json({ message: `Cadastro de prenatal com o número de prontuário ${numeroProntuario} não foi encontrado, confirme número de prontuário de paciente!`})
        };
        await prenatalModel.deleteOne({numeroProntuario: numeroProntuario})
        res.status(200).json({ message: `cadastro de prenatal com número de prontuário ${numeroProntuario} foi APAGADO com sucesso!!`});
    } catch (error) {
        res.status(500).json({ message: error.message });
    };
};


module.exports = {
    newPrenatal,
    findAllPrenatal,
    findBynumeroProntuario,
    getExamsByDate,
    getAppointmentByDate,
    updatePrenatalBynumeroProntuario,
    deletePrenatal
}