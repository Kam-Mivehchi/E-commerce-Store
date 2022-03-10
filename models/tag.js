const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');


class Tag extends Model { }

Tag.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        tag_name: {
            type: DataTypes.STRING,
        }
    },
    {
        sequelize,
        freezeTableName: true,
        modelName: 'tags',
    }
)
module.export = Tag;