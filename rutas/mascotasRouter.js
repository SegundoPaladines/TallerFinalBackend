import express from "express";
import { crearMascota, listarMascotas } from "../controladores/mascotaControlador.js";

//crear la instancia de tipo router
const mascostasRouter = express.Router();

//rutas
//DE TIPO GET
mascostasRouter.get('/', (req, res)=> {
    listarMascotas(req, res);
});

mascostasRouter.post('/crear', (req, res)=>{
    crearMascota(req, res);
});

export { mascostasRouter };