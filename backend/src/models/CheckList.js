const {Model, DataTypes} = require ('sequelize')

class CheckList extends Model{
    static init(connection){
        super.init({
            nome: DataTypes.STRING,
            realizado: DataTypes.BOOLEAN,
        }, {
            sequelize: connection
        })
       
 
    }
    static associar(models){
        this.hasMany(models.User, {foreignKey: 'checklist_id',as:'Checklist'})
    }
   
}
module.exports = CheckList 



