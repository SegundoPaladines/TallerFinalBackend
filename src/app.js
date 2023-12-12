//importar express
import express from "express";
import { mascostasRouter } from "../rutas/mascotasRouter.js";
import { db } from "../database/conexion.js";
import { solicitudesRouter } from "../rutas/solicitudesRouter.js";

//Crear la instancia de express
const app = express();

// Middleware para procesar datos JSON en el cuerpo de las solicitudes
app.use(express.json());

// Middleware para procesar datos de formularios en el cuerpo de las solicitudes
app.use(express.urlencoded({ extended: true }));

//definir la constante que contendra el puerto por el cual correrá el servidor
const PORT = 9000;

db.authenticate().then(()=>{
    console.log("La base de datos ha sido cargada con exito");
}).catch((r) => {
    console.log("Error al cargar la base de datos: "+e);
});

//definir las rutas
app.get("/", (req, res) => {res.send("Hola Desde Backend MySQL");});

//definir las rutas para mascotas
app.use('/mascotas', mascostasRouter);

//definir las rutas para solicitudes
app.use('/solicitudes', solicitudesRouter);

//si fue posible conectarse a la base de datos
db.sync().then(() => {
    // puerto de ecucha, recibe el numero de puerto y un función
    app.listen(PORT, ()=>{
        console.log(`Servidor inicializado en el puerto: ${PORT}`);
    });
}).catch((e) => {
    console.log("No se pudo sincronizar con la base de datos: "+e);
});