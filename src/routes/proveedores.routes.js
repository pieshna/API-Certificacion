import { Router } from "express";
import app from "../server";

const router = Router();

//conexion a la db
import { connect } from "../database";
import { ObjectID } from "mongodb";

//ver todos los Proveedores
router.get('/', async (req,res)=> {
    const db = await connect();
    const result = await db.collection('proveedores').find({}).toArray();
    res.json(result);
})

//Crar proveedores
router.post('/', async (req,res)=>{
    const db = await connect();
    const proveedor = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        correo: req.body.correo,
        empresa: req.body.empresa,
        imagen: req.body.imagen,
        numero: req.body.numero
    }
    const result = await db.collection('proveedores').insertOne(proveedor);
    res.json(result.ops[0])
})

//buscamos producto por id
router.get('/:id',async (req,res)=>{
    const {id} = req.params;
    const db = await connect();
    const result = await db.collection('proveedores').findOne({_id: ObjectID(id)});
    res.json(result);
})

router.delete('/:id', async (req,res) =>{
    const {id} = req.params;
    const db = await connect();
    const result = await db.collection('proveedores').deleteOne({_id: ObjectID(id)});
    res.json({
        messaje: `Proveedor ${id} eliminado`,
        result
    })
})

//editar producto por id
router.put('/:id', async (req,res)=>{
    const {id} =req.params;
    const ActualizarProveedor = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        correo: req.body.correo,
        empresa: req.body.empresa,
        imagen: req.body.imagen,
        numero: req.body.numero
    }
    const db = await connect();
    await db.collection('proveedores').updateOne({_id: ObjectID(id)}, {$set: ActualizarProveedor});
    res.json({
        messaje: `Proveedor ${id} actualizado`
    })


})

export default router;