const sequelize = require("../db");

("use strict");
const { Model, DataTypes } = require("sequelize");
class Producto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        // define association here
    }
}
Producto.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true, // Automatically gets converted to SERIAL for postgres
    },
    articulo: {
        type: DataTypes.STRING,

        validate: {
            is: ["^[a-zA-Z ]+$", 'i'],
            len: {
                args: [3, 255],
                msg: "El atriculo tiene que ser entre 3 y 255 caracteres",
            },
        },
    },
    descripcion: {
        type: DataTypes.STRING,

        validate: {
            notEmpty: {
                args: true,
                msg: "El campo no  puede estar vacio",
            },
            len: {
                args: [3, 255],
                msg: "El nombre tiene que ser entre 3 y 255 caracteres",
            },
        },
    },
    cantidad: {
        type: DataTypes.INTEGER,

        validate: {
            notEmpty: {
                args: true,
                msg: "El campo no  puede estar vacio",
            },
            isNumeric: {
                args: true,
                msg: "Solo puede ser número",
            },
        },
    },
    precio: {
        type: DataTypes.INTEGER,

        validate: {
            notEmpty: {
                args: true,
                msg: "El campo no  puede estar vacio",
            },
            isDecimal: {
                args: true,
                msg: "no olvidar los precios",
            },
        },
    },
    estado: DataTypes.BOOLEAN,
    fecha: {
        type: DataTypes.INTEGER,

        validate: {
            notEmpty: {
                args: true,
                msg: "El campo no  puede estar vacio",
            },
            isDate: {
                args: true,
                msg: "La fecha es obligatorio",
            },
        },
    },
}, {
    sequelize,
    timestamps: false,
    tableName: "productos",
    modelName: "Producto",
});
module.exports = Producto;