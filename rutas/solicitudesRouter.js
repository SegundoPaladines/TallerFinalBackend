import express from "express";
import { listarSolicitudes, crearSolicitud, buscarSolicitud, eliminarSolicitud, actualizarSolicitud } from "../controladores/solicitudControlador.js";

//crear la instancia de tipo router
const solicitudesRouter = express.Router();

//rutas
//Tipo GET
solicitudesRouter.get('/', (req, res) => {
    listarSolicitudes(req, res);
});
solicitudesRouter.get('/buscar/:id', (req, res) => {
    buscarSolicitud(req, res);
});

//tipo POST
solicitudesRouter.post('/crear', (req, res) => {
    crearSolicitud(req, res);
});

//tipo DELETE
solicitudesRouter.delete('/eliminar/:id', (req, res) => {
    eliminarSolicitud(req, res);
});

//tipo PUT
solicitudesRouter.put('/actualizar/:id', (req, res) => {
    actualizarSolicitud(req, res);
});

export { solicitudesRouter };