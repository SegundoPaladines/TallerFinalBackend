import express from "express";
import { crearUsuario, listarUsuarios, buscarUsuario, eliminarUsuario, actualizarUsuario, buscarUsuarioNombre} from "../controladores/usuarioControlador.js";

//crear la instancia de tipo router
const usuariosRouter = express.Router();

//rutas
//DE TIPO GET
usuariosRouter.get('/', (req, res)=> {
    listarUsuarios(req, res);
});

usuariosRouter.get('/buscar/:id',(req, res) => {
    buscarUsuario(req, res);
});

usuariosRouter.get('/buscar/nombre/:usuario',(req, res) => {
    buscarUsuarioNombre(req, res);
});

//DE TIPO POST
usuariosRouter.post('/crear', (req, res)=>{
    crearUsuario(req, res);
});

//Tipo DELETE
usuariosRouter.delete('/eliminar/:id', (req, res) => {
    eliminarUsuario(req, res);
});

//Tipo PUT
usuariosRouter.put('/actualizar/:id', (req, res) => {
    actualizarUsuario(req, res);
});

export { usuariosRouter };