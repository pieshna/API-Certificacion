import { Router } from "express";
import app from "../server";

const router = Router();

//conexion a la db
import { connect } from "../database";
import { ObjectID } from "mongodb";

//ver todos los productos
router.get('/', async (req,res)=> {
    const db = await connect();
    const result = await db.collection('users').find({}).toArray();
    res.json(result);
})

//Crar producto
router.post('/', async (req,res)=>{
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

//buscamos producto por id
router.get('/:id',async (req,res)=>{
    const {id} = req.params;
    const db = await connect();
    const result = await db.collection('users').findOne({_id: ObjectID(id)});
    res.json(result);
})

router.delete('/:id', async (req,res) =>{
    const {id} = req.params;
    const db = await connect();
    const result = await db.collection('users').deleteOne({_id: ObjectID(id)});
    res.json({
        messaje: 'producto '+ id +' eliminado',
        result
    })
})

//editar producto por id
router.put('/:id', async (req,res)=>{
    const {id} =req.params;
    const ActualizarProducto = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        correo: req.body.correo,
        password: req.body.password,
        imagen: req.body.imagen,
        username: req.body.username
    }
    const db = await connect();
    await db.collection('users').updateOne({_id: ObjectID(id)}, {$set: ActualizarProducto});
    res.json({
        messaje: 'producto '+id+' actualizado'
    })


})

export default router;