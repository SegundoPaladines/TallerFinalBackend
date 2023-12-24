//importar Sequelize
import { Sequelize } from "sequelize";
//importar la variable de conexion
import { db } from "../database/conexion.js";
//importar el modelo mascotas
import { mascotas } from "./mascotaModelo.js";
//importar el modelo usuarios
import { usuarios } from "./usuarioModelo.js"

//definicion del objeto que comunicara con la tabla
const solicitudes = db.define('solicitudes',{
    //definicion de los atributos
    pk:{
        //tipo de dato
        type: Sequelize.INTEGER,
        //no se permite vacio
        allowNull: false,
        //es la llave primaria
        primaryKey: true,
        //es autoincrementado
        autoIncrement: true
    },
    mascotaPK:{
        //tipo de dato
        type: Sequelize.INTEGER,
        //no se permite vacio
        allowNull: false
    },
    adoptante:{
         //tipo de dato
         type: Sequelize.INTEGER,
         //no se permite vacio
         allowNull: false
    },
    estado:{
        //tipo de dato
        type: Sequelize.CHAR,
        //no se permite vacio
        allowNull: false
    },
    fecha_inicio:{
        //tipo de dato
        type: Sequelize.DATE,
        //no se permite vacio
        allowNull: false
    },
    fecha_fin:{
        //tipo de dato
        type: Sequelize.DATE,
        //no se permite vacio
        allowNull: true
    }
});

// definir la relación de solicitud con mascota
solicitudes.belongsTo(mascotas, { foreignKey: 'mascotaPK' });
//la relacion con usuario
solicitudes.belongsTo(usuarios, { foreignKey: 'adoptante' });

export { solicitudes };