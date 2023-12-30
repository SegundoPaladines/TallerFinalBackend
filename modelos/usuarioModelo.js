//importar Squelizer
import { Sequelize } from "sequelize";
//importar la conexion
import { db } from "../database/conexion.js";

//definicion de la variable que construirá la tabla
export const usuarios = db.define('usuarios',{
    //definicion de los atributos
    pk:{
        //tipo de dato
        type:Sequelize.INTEGER,
        //no se permite vacio
        allowNull:false,
        //es la llave primaria
        primaryKey:true,
        //es autoincrementado
        autoIncrement:true
    },
    nombres:{
        //tipo de dato
        type:Sequelize.STRING,
        //no se permite vacio
        allowNull:false
    },
    telefono:{
        //tipo de dato
        type:Sequelize.STRING,
        //no se permite vacio
        allowNull:true
    },
    usuario:{
        //tipo de dato
        type:Sequelize.STRING,
        //no se permite vacio
        allowNull:false
    },
    passwd:{
        //tipo de dato
        type:Sequelize.STRING,
        //no se permite vacio
        allowNull:false
    },
    rol:{
        //tipo de dato
        type:Sequelize.STRING,
        //no se permite vacio
        allowNull:false
    },
    foto:{
        //tipo de dato
        type:Sequelize.STRING,
        //se permite vacio
        allowNull:true
    },
    edad:{
        //tipo de dato
        type:Sequelize.INTEGER,
        //se permite vacio
        allowNull:true
    },
});