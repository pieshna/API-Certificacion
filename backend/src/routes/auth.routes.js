import { Router } from "express";

const router=Router();

//conexion a la db
import { connect } from "../database";
import { ObjectID } from "mongodb";


router.post('/register', async (req,res)=>{
    const db = await connect();
    const usuario = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        correo: req.body.correo,
        password: req.body.password,
        imagen: req.body.imagen,
        username: req.body.username
    }
    const result = await db.collection('users').insertOne(usuario);
    res.json(result.ops[0])
})




export default router;