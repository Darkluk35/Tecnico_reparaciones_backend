//Se maneja la logica de cada ruta relacionada con los usuarios
import Usuario from '../models/usuario.js';


//Registra un nuevo usuario
const getUsuarios =async (req, res) => {
    try {
        const usuario = new Usuario(req.body);
        const usuarioAlmacenado = await usuario.save();
        res.json(usuarioAlmacenado);
    } catch (error) {
        console.log(error);
    }
}

export {
    getUsuarios
};