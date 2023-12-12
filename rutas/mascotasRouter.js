import express from "express";
import { buscarMascota, crearMascota, listarMascotas } from "../controladores/mascotaControlador.js";

//crear la instancia de tipo router
const mascostasRouter = express.Router();

//rutas
//DE TIPO GET
mascostasRouter.get('/', (req, res)=> {
    listarMascotas(req, res);
});

mascostasRouter.get('/buscar/:id',(req, res) => {
    buscarMascota(req, res);
})

//DE TIPO POST
mascostasRouter.post('/crear', (req, res)=>{
    crearMascota(req, res);
});

export { mascostasRouter };