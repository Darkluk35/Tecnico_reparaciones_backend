import express from 'express';
import database from './config/database.js';

const app = express();
database();
app.use("/",(req,res)=>{
    res.send("Hola mundo de la electronica");
});

app.listen(process.env.PORT,()=>{
    console.log(`Servidor escuchando en el puerto ${process.env.PORT}`);
});