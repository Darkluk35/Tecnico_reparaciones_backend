//Se define los esquemas y modelos relacionados con los usuarios
import mongoose from 'mongoose';

const usuarioSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim:true
    }
});

const Usuario = mongoose.model('Usuario', usuarioSchema);

export default Usuario;
