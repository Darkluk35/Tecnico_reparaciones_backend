//Se define los endpoints relacionados con los usuarios
import express from 'express';
import {getUsuarios} from '../controllers/usuarioControllers.js';

const router = express.Router();

router.post('/home', getUsuarios);

export default router;