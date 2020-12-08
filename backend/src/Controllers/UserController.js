const CheckList = require("../models/CheckList");

module.exports = {
    async criarUsuario(req,res){
      try{
        const{nome} = req.body;
        const usuarioCriado = await CheckList.create({nome});
        return res.json(usuarioCriado)
      }catch{
     // ANALISAR COM OS COLEGAS DO GRUPO
      }
    }
}