import express from 'express';
import database from './config/database.js';
import usuarioRoutes from './routes/usuarioRoutes.js';

database();
const app = express();
app.use(express.json());
app.use("/api",usuarioRoutes);



const PORT = process.env.PORT || 4000;
app.listen(PORT,()=>{
    console.log(`Servidor escuchando en el puerto ${process.env.PORT}`);
});