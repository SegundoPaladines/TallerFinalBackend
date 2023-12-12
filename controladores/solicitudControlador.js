//importamos el modelo de solicitudes
import { where } from "sequelize";
import { solicitudes } from "../modelos/solicitudModelo.js";

//listar todas las solicitudes
const listarSolicitudes = (req, res) => {
    solicitudes.findAll().then((r) => {
        res.status(200).json(r);
    }).catch((e) => {
        res.status(500).json({mensaje: "No se ha podido consultar las solicitudes"});
    });

    return;
}

//buscar solicitud por id
const buscarSolicitud = (req, res) => {
    const id = parseInt(req.params.id);

    if(id == null){
        res.status(400).json({mensaje: "Se requiere el id para poder buscar el registro"});
        return;
    }

    solicitudes.findByPk(id).then((r) => {
        res.status(200).json(r);
    }).catch((e) => {
        res.status(500).json({mensaje: "No se ha podido encontrar el registro"});
    });

    return;
}

//eliminar solicitud por id
const eliminarSolicitud = (req, res) => {
    const id = parseInt(req.params.id);

    if(id == null){
        res.status(400).json({mensaje: "Se requiere el id para poder buscar el registro"});
        return;
    }

    solicitudes.destroy({
        where:{ pk: id}
    }).then((r)=>{
        res.status(200).json({mensaje: "Registro eliminado con exito !"});
    }).catch((e) => {
        res.status(500).json({mensaje: "No se a podido remover el registro de la base de datos"});
    });

    return;
}

//crear una solicitud
const crearSolicitud = (req, res) => {
    //validar que vengan los campos requeridos
    if(!req.body.mascotaPK){
        res.status(400).json({mensaje: "El campo de id (mascotaPK) de la mascota es requerido"});
        return;
    }
    if(!req.body.adoptante){
        res.status(400).json({mensaje: "El nombre del adoptante (adoptante) es requerido"});
        return;
    }
    if(!req.body.estado){
        res.status(400).json({mensaje: "El estado de la solicitud es requerido"});
        return;
    }
    if(!req.body.fecha_inicio){
        res.status(400).json({mensaje: "La fecha de inicio es requerida"});
        return;
    }

    //todo el dataset
    const dataset = {
        mascotaPK: req.body.mascotaPK,
        adoptante: req.body.adoptante,
        estado: req.body.estado,
        fecha_inicio: req.body.fecha_inicio,
        fecha_fin: req.body.fecha_fin
    }

    //creacion de la solicitud en la base de datos
    solicitudes.create(dataset).then((r) => {
        res.status(200).json({mensaje: "Solicitud registrada con exito!"});
    }).catch((e) => {
        res.status(500).json({mensaje:" Error, no se ha podido crear el registro en la base de datos: "+e});
    });

    return;
}

//buscar solicitud por id
const actualizarSolicitud = (req, res) => {
    const id = parseInt(req.params.id);

    if(id == null){
        res.status(400).json({mensaje: "Se requiere el id para poder buscar el registro"});
        return;
    }

    if(!req.body.adoptante && !req.body.mascotaPK && !req.body.estado && !req.body.fecha_inicio && !req.body.fecha_fin){
        res.status(400).json({mensaje: "No se a detectado ningun campo para actualizar"});
        return;
    }

    const mascotaPK = req.body.mascotaPK;
    const adoptante = req.body.adoptante;
    const estado = req.body.estado;
    const fecha_inicio = req.body.fecha_inicio;
    const fecha_fin = req.body.fecha_fin;

    solicitudes.update({
        mascotaPK:mascotaPK,
        adoptante:adoptante, 
        estado: estado,
        fecha_inicio:fecha_inicio,
        fecha_fin: fecha_fin
    },{
        where: {pk:id}
    }).then((r) => {
        res.status(200).json({mensaje: "Solicitud actualizada exitosamente"});
    }).catch((e) => {
        res.status(500).json({mensaje: "No se pudo alterar el registro en la base de datos"});
    });

    return;
}

export { listarSolicitudes, crearSolicitud, buscarSolicitud, eliminarSolicitud, actualizarSolicitud }