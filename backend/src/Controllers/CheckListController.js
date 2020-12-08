const CheckList = require("../models/CheckList");

module.exports = {
    async criarCheckList(req,res){
      try{
        const{nome,preco_venda} = req.body;
        const checkListCriado = await CheckList.create({nome,preco_venda});
        return res.json(checkListCriado)
      }catch{
          
      }
    },
}