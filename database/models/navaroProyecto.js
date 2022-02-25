const sequelize = require("../db");

("use strict");
const { Model, DataTypes } = require("sequelize");
class NavaroProyecto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        // define association here
    }
}
NavaroProyecto.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true, // Automatically gets converted to SERIAL for postgres
    },
    proyecto: {
        type: DataTypes.STRING,

        validate: {
            is: ["^[a-zA-Z ]+$", 'i'],
            len: {
                args: [3, 255],
                msg: "El atriculo tiene que ser entre 3 y 255 caracteres",
            },
        },
    },
    contratista: {
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
    contrato: {
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
    monto: {
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
    anticipo: {
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
    capitalNeto: {
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
    fechaInicial: {
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
    fechaFinal: {
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
    tableName: "navaroProyecto",
    modelName: "NavaroProyecto",
});
module.exports = NavaroProyecto;