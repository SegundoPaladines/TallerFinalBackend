//importar Sequelize
import { Sequelize } from "sequelize";
//importar la variable de conexion
import { db } from "../database/conexion.js";

//definicion del objeto que comunicara con la tabla
export const mascotas = db.define('mascotas',{
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
    nombre:{
         //tipo de dato
         type:Sequelize.STRING,
         //no se permite vacio
         allowNull:false
    },
    edad:{
        //tipo de dato
        type:Sequelize.INTEGER,
        //se permite vacio
        allowNull:true
    },
    tipo_mascota:{
        //tipo de dato
        type:Sequelize.CHAR,
        //no se permite vacio
        allowNull:false
    },
    estado:{
        //tipo de dato
        type:Sequelize.INTEGER,
        //no se permite vacio
        allowNull:true
    }
});