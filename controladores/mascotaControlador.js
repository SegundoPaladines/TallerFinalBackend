//importar el modelo de mascotas
import { mascotas } from "../modelos/mascotaModelo.js";

//listar todas las mascotas
const listarMascotas = (req, res) => {
    mascotas.findAll().then((r) => {
        res.status(200).json(r);
    }).catch((e) => {
        res.status(500).json({mensaje: "No se ha podido encontrar ningun registro"+e});
    });

    return;
}

//buscar una mascota por id
const buscarMascota = (req , res) => {
    const id = parseInt(req.params.id);
    
    if(id == null){
        res.status(400).json({mensaje: "El id no puede estar vacio"});
        return;
    }

    mascotas.findByPk(id).then((r) => {
        res.status(200).json(r);
    }).catch((e) => {
        res.status(500).json({mensaje: "No se ha podido encontrar el registro"});
    });

    return;
}

//crear una mascota en la tabla
const crearMascota = (req, res) => {
    //los campos nombre, tipo mascota y estado son obligatorios
    if(!req.body.nombre){
        res.status(400).json({mensaje: "el campo nombre es requerido"});
        return;
    }
    if(!req.body.tipo_mascota){
        res.status(400).json({mensaje: "el tipo_mascota es requerido"});
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

//eliminar una mascota por id
const eliminarMascota = (req , res) => {
    const id = parseInt(req.params.id);
    
    if(id == null){
        res.status(400).json({mensaje: "El id no puede estar vacio"});
        return;
    }

    mascotas.destroy({
        where:{pk: id} //recordemos que en la base de datos, el campo de la llave primaria es pk, no id
    }).then((r) => {
        res.status(200).json({mensaje: "Mascota eliminada exitosamente"});
    }).catch((e) => {
        res.status(500).json({mensaje: "No se ha podido eliminar el registro"});
    });

    return;
}

//actualizar una mascota por id
const actualizarMascota = (req , res) => {
    const id = parseInt(req.params.id);
    
    if(id == null){
        res.status(400).json({mensaje: "El id no puede estar vacio"});
        return;
    }

    if(!req.body.nombre && !req.body.edad && !req.body.tipo_mascota && !req.body.estado){
        res.status(400).json({mensaje: "No se ha encontrado ningun dato para actualizar"});
        return;
    }

    const nombre = req.body.nombre;
    const edad = req.body.edad;
    const tipo_mascota = req.body.tipo_mascota;
    const estado = req.body.estado;

    mascotas.update({
        nombre: nombre,
        edad:edad,
        tipo_mascota:tipo_mascota,
        estado:estado
    },{
        where:{pk: id} //recordemos que en la base de datos, el campo de la llave primaria es pk, no id
    }).then((r) => {
        res.status(200).json({mensaje: "Mascota actualizada exitosamente"});
    }).catch((e) => {
        res.status(500).json({mensaje: "No se ha podido actualizar el registro"});
    });

    return;
}

export { crearMascota, listarMascotas, buscarMascota, eliminarMascota, actualizarMascota };