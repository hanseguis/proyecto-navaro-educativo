const sequelize = require('../db');

'use strict';
const { Model, DataTypes } = require('sequelize');
class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        // define association here
    }
}
User.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true // Automatically gets converted to SERIAL for postgres
    },
    // Datos del usuario 
    username: {
        type: DataTypes.STRING,

        validate: {
            is: ["^[a-zA-Z0-9 ]+$", 'i'],
            len: {
                args: [3, 40],
                msg: "El nombre tiene que ser entre 3 y 40 caracteres",
            },
        },
    },
    password: {
        type: DataTypes.STRING,
    },


}, {
    sequelize,
    timestamps: false,
    tableName: 'user',
    modelName: 'User',
});
module.exports = User