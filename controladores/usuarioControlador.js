//importar el modelo de mascotas
import { usuarios } from "../modelos/usuarioModelo.js";

//listar todas los usuarios
const listarUsuarios = (req, res) => {
    usuarios.findAll().then((r) => {
        res.status(200).json(r);
    }).catch((e) => {
        res.status(500).json({tipo:'error', mensaje: "No se ha podido encontrar ningun registro"+e});
    });

    return;
}

//buscar un usuario por id
const buscarUsuario= (req , res) => {
    const id = parseInt(req.params.id);
    
    if(id == null){
        res.status(400).json({tipo:'error', mensaje: "El id no puede estar vacio"});
        return;
    }

    usuarios.findByPk(id).then((r) => {
        res.status(200).json(r);
    }).catch((e) => {
        res.status(500).json({tipo:'error', mensaje: "No se ha podido encontrar el registro"});
    });

    return;
}

//crear un usuarios en la tabla
const crearUsuario = (req, res) => {
    //los campos nombres, usuario y passwd son obligatorios
    if(!req.body.nombres){
        res.status(400).json({tipo:'error', mensaje: "el campo nombres es requerido"});
        return;
    }

    if(!req.body.usuario){
        res.status(400).json({tipo:'error',mensaje: "el usuario es requerido"});
        return;
    }

    if(!req.body.passwd){
        res.status(400).json({tipo:'error',mensaje: "el passwd es requerido"});
        return;
    }

    if(!req.body.rol){
        res.status(400).json({tipo:'error',mensaje: "el rol es requerido"});
        return;
    }
    
    //definicion del dataset
    const dataset = {
        nombres: req.body.nombres,
        edad: req.body.edad,
        usuario: req.body.usuario,
        passwd: req.body.passwd,
        foto: req.body.foto,
        rol: req.body.rol
    }

    //creacion del usuario en la base de datos
    usuarios.create(dataset).then((r)=>{
        res.status(200).json({
            tipo:'success',
            mensaje: "Usuario registrado con exito"
        });
    }).catch((e)=>{
        res.status(500).json({
            tipo:'error',
            mensaje: "No se ha podido registrar el usuario"+e});
    });

    return;
}

//eliminar una usuario por id
const eliminarUsuario = (req , res) => {
    const id = parseInt(req.params.id);
    
    if(id == null){
        res.status(400).json({tipo:'error', mensaje: "El id no puede estar vacio"});
        return;
    }

    usuarios.destroy({
        where:{pk: id} //recordemos que en la base de datos, el campo de la llave primaria es pk, no id
    }).then((r) => {
        res.status(200).json({tipo:'success', mensaje: "usuario eliminado exitosamente"});
    }).catch((e) => {
        res.status(500).json({tipo:'error', mensaje: "No se ha podido eliminar el registro"});
    });

    return;
}

//actualizar un usuario por id
const actualizarUsuario = (req , res) => {
    const id = parseInt(req.params.id);
    
    if(id == null){
        res.status(400).json({tipo:'error', mensaje: "El id no puede estar vacio"});
        return;
    }

    if(!req.body.nombres && !req.body.edad && !req.body.foto && !req.body.passwd && !req.body.usuario && !req.body.rol){
        res.status(400).json({tipo:'error', mensaje: "No se ha encontrado ningun dato para actualizar"});
        return;
    }

    const nombres = req.body.nombres;
    const edad = req.body.edad;
    const passwd = req.body.passwd;
    const usuario = req.body.usuario;
    const foto = req.body.foto;
    const rol = req.body.rol;

    usuarios.update({
        nombres: nombres,
        edad:edad,
        passwd:passwd,
        usuario:usuario,
        foto:foto,
        rol:rol
    },{
        where:{pk: id} //recordemos que en la base de datos, el campo de la llave primaria es pk, no id
    }).then((r) => {
        res.status(200).json({tipo:'success', mensaje: "Usuario actualizado exitosamente"});
    }).catch((e) => {
        res.status(500).json({tipo:'error', mensaje: "No se ha podido actualizar el registro"});
    });

    return;
}

export { crearUsuario, listarUsuarios, buscarUsuario, eliminarUsuario, actualizarUsuario };