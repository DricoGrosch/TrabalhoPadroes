const {Model, DataTypes} = require ('sequelize')

class Item extends Model{
    static init(connection){
        super.init({
            descricao: DataTypes.STRING,
            realizado: DataTypes.BOOLEAN,
        }, {
            sequelize: connection
        })
       
 
    }
    static associar(models){
        this.hasOne(models.User, {foreignKey: 'user_id',as:'User'})
    }
   
}
module.exports = Item 


