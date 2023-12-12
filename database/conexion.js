// importar la biblioteca Sequelize
import { Sequelize } from "sequelize";

//definir y exportar la constante que sostendrá la conexion a la base de datos
export const db = new Sequelize('adopcion', 'adopcion', '123', {
    dialect:'mysql',
    host:'localhost'
});