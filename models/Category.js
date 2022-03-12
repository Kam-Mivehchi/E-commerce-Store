//external connection to sequalize db
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection')



class Category extends Model { }

Category.init({
    //model attributes ar defined
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    category_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
},
    {

        //additonal model objects are defined
        sequelize,
        timestamps: false,
        //enforce the table and model name to be the same
        freezeTableName: true,
        underscored: true,
        //assign name to the model
        modelName: 'category',

    })

//export the model 
module.exports = Category;