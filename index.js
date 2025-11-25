import express from 'express';

const app = express();

app.use("/",(req,res)=>{
    res.send("Hola mundo de la electronica");
});

app.listen(4000,()=>{
    console.log("Servidor escuchando en el puerto 3000");
});