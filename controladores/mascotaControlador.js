//importar el modelo de mascotas
import {mascotas} from "../modelos/mascotaModelo.js";

//listar todas las mascotas
const listarMascotas = (req, res) => {
    mascotas.findAll().then((r) => {
        res.status(200).json(r);
    }).catch((e) => {
        res.status(500).json({mensaje: "No se ha podido encontrar ningun registro"+e});
    });
}

//crear una mascota en la tabla
const crearMascota = (req, res) => {
    //los campos nombre, tipo mascota y estado son obligatorios
    if(!req.body.nombre){
        res.status(500).json({mensaje: "el campo nombre es requerido"});
        return;
    }
    if(!req.body.tipo_mascota){
        res.status(500).json({mensaje: "el tipo_mascota es requerido"});
        return;
    }
    
    //definicion del dataset
    const dataset = {
        nombre: req.body.nombre,
        edad: req.body.edad,
        tipo_mascota: req.body.tipo_mascota,
        estado: req.body.estado
    }

    //creacion de la mascota en la base de datos
    mascotas.create(dataset).then((r)=>{
        res.status(200).json({mensaje: "Mascota registrada con exito"});
    }).catch((e)=>{
        res.status(500).json({mensaje: "No se ha podido registrar la mascota"+e});
    });

    return;
}

export { crearMascota, listarMascotas };