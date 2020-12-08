// CONEXAO COM BANCO
const Sequelize = require ('sequelize');
const dbConfig = require ('../Config/dataBase')


const Item = require('../models/Item')
const CheckList = require('../models/CheckList')
const User = require('../models/User')

const connection = new Sequelize(dbConfig);


User.init(connection)
Item.init(connection)
CheckList.init(connection)


Item.associar(connection.models)
CheckList.associar(connection.models)







module.exports = connection;